import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentSubmissionTypesPostContentSubmissionTypeRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentSubmissionType?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;
    contentSubmissionSharedBusinessEntitiesContentSubmissionType1?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;
    contentSubmissionSharedBusinessEntitiesContentSubmissionType2?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType;
    textXml: Uint8Array;
}
export declare class ContentSubmissionTypesPostContentSubmissionTypeRequest extends SpeakeasyBase {
    request: ContentSubmissionTypesPostContentSubmissionTypeRequests;
}
export declare class ContentSubmissionTypesPostContentSubmissionTypeResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentSubmissionTypesPostContentSubmissionType200ApplicationJsonInt32Integer?: number;
    contentSubmissionTypesPostContentSubmissionType200TextJsonInt32Integer?: number;
    contentType: string;
    statusCode: number;
}
