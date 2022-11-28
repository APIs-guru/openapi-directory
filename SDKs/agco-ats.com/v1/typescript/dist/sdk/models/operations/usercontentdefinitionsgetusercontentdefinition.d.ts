import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserContentDefinitionsGetUserContentDefinitionPathParams extends SpeakeasyBase {
    userContentDefinitionId: number;
}
export declare class UserContentDefinitionsGetUserContentDefinitionRequest extends SpeakeasyBase {
    pathParams: UserContentDefinitionsGetUserContentDefinitionPathParams;
}
export declare class UserContentDefinitionsGetUserContentDefinitionResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentSubmissionSharedBusinessEntitiesUserContentDefinition?: shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition;
    contentType: string;
    statusCode: number;
}
