import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StringDefinitionsGetDefinitionsQueryParams extends SpeakeasyBase {
    descriptionText?: string;
    includeDeletedLanguages?: boolean;
    includeTranslations?: boolean;
    languageIds?: string;
    limit?: number;
    matchingTranslationsOnly?: boolean;
    modifiedAfterTimestamp?: string;
    stringIds?: string;
    stringText?: string;
    useFullText?: boolean;
}
export declare class StringDefinitionsGetDefinitionsRequest extends SpeakeasyBase {
    queryParams: StringDefinitionsGetDefinitionsQueryParams;
}
export declare class StringDefinitionsGetDefinitionsResponse extends SpeakeasyBase {
    apiIPagedResponseGlobalResourcesSharedModelsStringDefinition?: shared.ApiIPagedResponseGlobalResourcesSharedModelsStringDefinition;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
