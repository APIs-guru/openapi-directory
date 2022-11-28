import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentReleaseGetContentReleaseVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentDefinitionID" })
  contentDefinitionId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=releaseID" })
  releaseId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: number;
}


export class ContentReleaseGetContentReleaseVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ContentReleaseGetContentReleaseVersionQueryParams;
}


export class ContentReleaseGetContentReleaseVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
