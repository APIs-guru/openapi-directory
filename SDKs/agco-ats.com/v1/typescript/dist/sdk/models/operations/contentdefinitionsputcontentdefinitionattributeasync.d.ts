import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDefinitionsPutContentDefinitionAttributeAsyncPathParams extends SpeakeasyBase {
    contentDefinitionAttributeId: number;
}
export declare class ContentDefinitionsPutContentDefinitionAttributeAsyncRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentDefinitionAttribute?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;
    contentSubmissionSharedBusinessEntitiesContentDefinitionAttribute1?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;
    contentSubmissionSharedBusinessEntitiesContentDefinitionAttribute2?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;
    textXml: Uint8Array;
}
export declare class ContentDefinitionsPutContentDefinitionAttributeAsyncRequest extends SpeakeasyBase {
    pathParams: ContentDefinitionsPutContentDefinitionAttributeAsyncPathParams;
    request: ContentDefinitionsPutContentDefinitionAttributeAsyncRequests;
}
export declare class ContentDefinitionsPutContentDefinitionAttributeAsyncResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
