import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams extends SpeakeasyBase {
    contentSubmissionAttributeId: number;
}
export declare class ContentSubmissionsPutContentSubmissionAttributeAsyncRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;
    contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute1?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;
    contentSubmissionSharedBusinessEntitiesContentSubmissionAttribute2?: shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute;
    textXml: Uint8Array;
}
export declare class ContentSubmissionsPutContentSubmissionAttributeAsyncRequest extends SpeakeasyBase {
    pathParams: ContentSubmissionsPutContentSubmissionAttributeAsyncPathParams;
    request: ContentSubmissionsPutContentSubmissionAttributeAsyncRequests;
}
export declare class ContentSubmissionsPutContentSubmissionAttributeAsyncResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
