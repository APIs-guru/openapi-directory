import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserContentDefinitionsPostUserContentDefinitionRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    contentSubmissionSharedBusinessEntitiesUserContentDefinition?: shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition;
    contentSubmissionSharedBusinessEntitiesUserContentDefinition1?: shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition;
    contentSubmissionSharedBusinessEntitiesUserContentDefinition2?: shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition;
    textXml: Uint8Array;
}
export declare class UserContentDefinitionsPostUserContentDefinitionRequest extends SpeakeasyBase {
    request: UserContentDefinitionsPostUserContentDefinitionRequests;
}
export declare class UserContentDefinitionsPostUserContentDefinitionResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    userContentDefinitionsPostUserContentDefinition200ApplicationJsonInt32Integer?: number;
    userContentDefinitionsPostUserContentDefinition200TextJsonInt32Integer?: number;
}
