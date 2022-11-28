import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContentSubmissionsGetContentSubmissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionID" })
  contentSubmissionId: number;
}


export class ContentSubmissionsGetContentSubmissionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" })
  includeAttributes?: string;
}


export class ContentSubmissionsGetContentSubmissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentSubmissionsGetContentSubmissionPathParams;

  @SpeakeasyMetadata()
  queryParams: ContentSubmissionsGetContentSubmissionQueryParams;
}


export class ContentSubmissionsGetContentSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentSubmissionSharedBusinessEntitiesContentSubmission?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmission;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
