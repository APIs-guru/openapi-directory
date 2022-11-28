import { SpeakeasyBase } from "../../../internal/utils";
export declare class LanguagesDeleteLanguagePathParams extends SpeakeasyBase {
    localeId: number;
}
export declare class LanguagesDeleteLanguageRequest extends SpeakeasyBase {
    pathParams: LanguagesDeleteLanguagePathParams;
}
export declare class LanguagesDeleteLanguageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
