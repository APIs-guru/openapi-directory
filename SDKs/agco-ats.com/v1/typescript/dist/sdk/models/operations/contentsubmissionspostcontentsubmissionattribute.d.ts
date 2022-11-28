import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentSubmissionsPostContentSubmissionAttributePathParams extends SpeakeasyBase {
    contentSubmissionId: number;
}
export declare class ContentSubmissionsPostContentSubmissionAttributeRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;
    contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute1?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;
    contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute2?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;
    textXml: Uint8Array;
}
export declare class ContentSubmissionsPostContentSubmissionAttributeRequest extends SpeakeasyBase {
    pathParams: ContentSubmissionsPostContentSubmissionAttributePathParams;
    request: ContentSubmissionsPostContentSubmissionAttributeRequests;
}
export declare class ContentSubmissionsPostContentSubmissionAttributeResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentSubmissionsPostContentSubmissionAttribute200ApplicationJsonInt32Integer?: number;
    contentSubmissionsPostContentSubmissionAttribute200TextJsonInt32Integer?: number;
    contentType: string;
    statusCode: number;
}
