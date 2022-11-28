import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationKeysGetQueryParams extends SpeakeasyBase {
    keyNames?: string;
    limit?: number;
    offset?: number;
}
export declare class TranslationKeysGetRequest extends SpeakeasyBase {
    queryParams: TranslationKeysGetQueryParams;
}
export declare class TranslationKeysGetResponse extends SpeakeasyBase {
    apiIPagedResponseOasSupportSharedModelsTranslationKey?: shared.ApiIPagedResponseOasSupportSharedModelsTranslationKey;
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
