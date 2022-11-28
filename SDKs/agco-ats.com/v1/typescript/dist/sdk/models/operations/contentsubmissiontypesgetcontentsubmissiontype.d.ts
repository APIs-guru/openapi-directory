import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentSubmissionTypesGetContentSubmissionTypePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ContentSubmissionTypesGetContentSubmissionTypeRequest extends SpeakeasyBase {
    pathParams: ContentSubmissionTypesGetContentSubmissionTypePathParams;
}
export declare class ContentSubmissionTypesGetContentSubmissionTypeResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentSubmissionType?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;
    contentType: string;
    statusCode: number;
}
