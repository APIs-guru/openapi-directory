import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StringDefinitionsGetDefinitionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StringDefinitionsGetDefinitionQueryParams extends SpeakeasyBase {
    includeDeletedLanguages?: boolean;
    includeTranslations?: boolean;
    languageIds?: string;
}
export declare class StringDefinitionsGetDefinitionRequest extends SpeakeasyBase {
    pathParams: StringDefinitionsGetDefinitionPathParams;
    queryParams: StringDefinitionsGetDefinitionQueryParams;
}
export declare class StringDefinitionsGetDefinitionResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    globalResourcesSharedModelsStringDefinition?: shared.GlobalResourcesSharedModelsStringDefinition;
    statusCode: number;
}
