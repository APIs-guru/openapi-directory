import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentSubmissionsGetContentSubmissionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentDefinitionID" })
  contentDefinitionId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" })
  includeAttributes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDefinition" })
  includeDefinition?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=releaseID" })
  releaseId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=typeID" })
  typeId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userID" })
  userId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: number;
}


export class ContentSubmissionsGetContentSubmissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ContentSubmissionsGetContentSubmissionsQueryParams;
}


export class ContentSubmissionsGetContentSubmissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
