import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDefinitionsGetContentDefinitionPathParams extends SpeakeasyBase {
    contentDefinitionId: number;
}
export declare class ContentDefinitionsGetContentDefinitionQueryParams extends SpeakeasyBase {
    includeAttributes?: string;
}
export declare class ContentDefinitionsGetContentDefinitionRequest extends SpeakeasyBase {
    pathParams: ContentDefinitionsGetContentDefinitionPathParams;
    queryParams: ContentDefinitionsGetContentDefinitionQueryParams;
}
export declare class ContentDefinitionsGetContentDefinitionResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentSubmissionSharedBusinessEntitiesContentDefinition?: shared.ContentSubmissionSharedBusinessEntitiesContentDefinition;
    contentType: string;
    statusCode: number;
}
