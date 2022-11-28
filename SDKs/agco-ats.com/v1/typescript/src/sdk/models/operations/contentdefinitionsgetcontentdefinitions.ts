import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentDefinitionsGetContentDefinitionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" })
  includeAttributes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userID" })
  userId?: number;
}


export class ContentDefinitionsGetContentDefinitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ContentDefinitionsGetContentDefinitionsQueryParams;
}


export class ContentDefinitionsGetContentDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
