import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentSubmissionsGetContentSubmissionAttributesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionID" })
  contentSubmissionId: number;
}


export class ContentSubmissionsGetContentSubmissionAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class ContentSubmissionsGetContentSubmissionAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentSubmissionsGetContentSubmissionAttributesPathParams;

  @SpeakeasyMetadata()
  queryParams: ContentSubmissionsGetContentSubmissionAttributesQueryParams;
}


export class ContentSubmissionsGetContentSubmissionAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  apiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
