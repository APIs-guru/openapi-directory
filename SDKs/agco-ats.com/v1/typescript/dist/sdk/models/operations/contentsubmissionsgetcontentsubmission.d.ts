import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentSubmissionsGetContentSubmissionPathParams extends SpeakeasyBase {
    contentSubmissionId: number;
}
export declare class ContentSubmissionsGetContentSubmissionQueryParams extends SpeakeasyBase {
    includeAttributes?: string;
}
export declare class ContentSubmissionsGetContentSubmissionRequest extends SpeakeasyBase {
    pathParams: ContentSubmissionsGetContentSubmissionPathParams;
    queryParams: ContentSubmissionsGetContentSubmissionQueryParams;
}
export declare class ContentSubmissionsGetContentSubmissionResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentSubmission?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmission;
    contentType: string;
    statusCode: number;
}
