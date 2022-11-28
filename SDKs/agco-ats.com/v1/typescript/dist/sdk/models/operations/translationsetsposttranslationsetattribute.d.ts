import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationSetsPostTranslationSetAttributePathParams extends SpeakeasyBase {
    id: number;
}
export declare class TranslationSetsPostTranslationSetAttributeRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    globalResourcesSharedModelsTranslationSetAttribute?: shared.GlobalResourcesSharedModelsTranslationSetAttribute;
    globalResourcesSharedModelsTranslationSetAttribute1?: shared.GlobalResourcesSharedModelsTranslationSetAttribute;
    globalResourcesSharedModelsTranslationSetAttribute2?: shared.GlobalResourcesSharedModelsTranslationSetAttribute;
    textXml: Uint8Array;
}
export declare class TranslationSetsPostTranslationSetAttributeRequest extends SpeakeasyBase {
    pathParams: TranslationSetsPostTranslationSetAttributePathParams;
    request: TranslationSetsPostTranslationSetAttributeRequests;
}
export declare class TranslationSetsPostTranslationSetAttributeResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    translationSetsPostTranslationSetAttribute200ApplicationJsonInt32Integer?: number;
    translationSetsPostTranslationSetAttribute200TextJsonInt32Integer?: number;
}
