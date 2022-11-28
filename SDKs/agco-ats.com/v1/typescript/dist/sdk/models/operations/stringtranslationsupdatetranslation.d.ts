import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StringTranslationsUpdateTranslationPathParams extends SpeakeasyBase {
    languageId: number;
    stringId: string;
}
export declare class StringTranslationsUpdateTranslationRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    globalResourcesSharedModelsStringTranslation?: shared.GlobalResourcesSharedModelsStringTranslation;
    globalResourcesSharedModelsStringTranslation1?: shared.GlobalResourcesSharedModelsStringTranslation;
    globalResourcesSharedModelsStringTranslation2?: shared.GlobalResourcesSharedModelsStringTranslation;
    textXml: Uint8Array;
}
export declare class StringTranslationsUpdateTranslationRequest extends SpeakeasyBase {
    pathParams: StringTranslationsUpdateTranslationPathParams;
    request: StringTranslationsUpdateTranslationRequests;
}
export declare class StringTranslationsUpdateTranslationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
