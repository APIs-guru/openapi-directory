import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentReleaseGetContentReleaseVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=contentDefinitionID" })
  contentDefinitionId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=releaseID" })
  releaseId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: number;
}


export class ContentReleaseGetContentReleaseVersionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ContentReleaseGetContentReleaseVersionQueryParams;
}


export class ContentReleaseGetContentReleaseVersionResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
