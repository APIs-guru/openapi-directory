import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationSetsUpdateTranslationSetAttributePathParams extends SpeakeasyBase {
    id: number;
}
export declare class TranslationSetsUpdateTranslationSetAttributeRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    globalResourcesSharedModelsTranslationSetAttribute?: shared.GlobalResourcesSharedModelsTranslationSetAttribute;
    globalResourcesSharedModelsTranslationSetAttribute1?: shared.GlobalResourcesSharedModelsTranslationSetAttribute;
    globalResourcesSharedModelsTranslationSetAttribute2?: shared.GlobalResourcesSharedModelsTranslationSetAttribute;
    textXml: Uint8Array;
}
export declare class TranslationSetsUpdateTranslationSetAttributeRequest extends SpeakeasyBase {
    pathParams: TranslationSetsUpdateTranslationSetAttributePathParams;
    request: TranslationSetsUpdateTranslationSetAttributeRequests;
}
export declare class TranslationSetsUpdateTranslationSetAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
