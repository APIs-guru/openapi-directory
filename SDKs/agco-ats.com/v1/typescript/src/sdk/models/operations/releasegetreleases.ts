import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReleaseGetReleasesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bundleID" })
  bundleId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=visible" })
  visible?: boolean;
}


export class ReleaseGetReleasesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReleaseGetReleasesQueryParams;
}


export class ReleaseGetReleasesResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesRelease?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesRelease;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
