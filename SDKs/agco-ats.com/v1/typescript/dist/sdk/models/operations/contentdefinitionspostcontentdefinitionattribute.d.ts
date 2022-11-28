import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDefinitionsPostContentDefinitionAttributePathParams extends SpeakeasyBase {
    contentDefinitionId: number;
}
export declare class ContentDefinitionsPostContentDefinitionAttributeRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentDefinitionAttribute?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;
    contentSubmissionSharedBusinessEntitiesContentDefinitionAttribute1?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;
    contentSubmissionSharedBusinessEntitiesContentDefinitionAttribute2?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute;
    textXml: Uint8Array;
}
export declare class ContentDefinitionsPostContentDefinitionAttributeRequest extends SpeakeasyBase {
    pathParams: ContentDefinitionsPostContentDefinitionAttributePathParams;
    request: ContentDefinitionsPostContentDefinitionAttributeRequests;
}
export declare class ContentDefinitionsPostContentDefinitionAttributeResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentDefinitionsPostContentDefinitionAttribute200ApplicationJsonInt32Integer?: number;
    contentDefinitionsPostContentDefinitionAttribute200TextJsonInt32Integer?: number;
    contentType: string;
    statusCode: number;
}
