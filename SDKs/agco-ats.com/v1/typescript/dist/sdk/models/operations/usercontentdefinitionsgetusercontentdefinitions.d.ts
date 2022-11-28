import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserContentDefinitionsGetUserContentDefinitionsQueryParams extends SpeakeasyBase {
    contentDefinitionId?: number;
    limit?: number;
    offset?: number;
    userId?: number;
}
export declare class UserContentDefinitionsGetUserContentDefinitionsRequest extends SpeakeasyBase {
    queryParams: UserContentDefinitionsGetUserContentDefinitionsQueryParams;
}
export declare class UserContentDefinitionsGetUserContentDefinitionsResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    apiPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition?: shared.ApiPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition;
    contentType: string;
    statusCode: number;
}
