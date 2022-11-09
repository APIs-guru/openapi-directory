import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentSubmissionsGetContentSubmissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentSubmissionID" })
  contentSubmissionId: number;
}


export class ContentSubmissionsGetContentSubmissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeAttributes" })
  includeAttributes?: string;
}


export class ContentSubmissionsGetContentSubmissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentSubmissionsGetContentSubmissionPathParams;

  @Metadata()
  queryParams: ContentSubmissionsGetContentSubmissionQueryParams;
}


export class ContentSubmissionsGetContentSubmissionResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentSubmissionSharedBusinessEntitiesContentSubmission?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmission;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
