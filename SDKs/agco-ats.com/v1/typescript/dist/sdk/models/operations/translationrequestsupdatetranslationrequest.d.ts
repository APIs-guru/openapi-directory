import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslationRequestsUpdateTranslationRequestPathParams extends SpeakeasyBase {
    id: number;
}
export declare class TranslationRequestsUpdateTranslationRequestQueryParams extends SpeakeasyBase {
    doResendRequest?: boolean;
}
export declare class TranslationRequestsUpdateTranslationRequestRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    globalResourcesSharedModelsTranslationRequest?: shared.GlobalResourcesSharedModelsTranslationRequest;
    globalResourcesSharedModelsTranslationRequest1?: shared.GlobalResourcesSharedModelsTranslationRequest;
    globalResourcesSharedModelsTranslationRequest2?: shared.GlobalResourcesSharedModelsTranslationRequest;
    textXml: Uint8Array;
}
export declare class TranslationRequestsUpdateTranslationRequestRequest extends SpeakeasyBase {
    pathParams: TranslationRequestsUpdateTranslationRequestPathParams;
    queryParams: TranslationRequestsUpdateTranslationRequestQueryParams;
    request: TranslationRequestsUpdateTranslationRequestRequests;
}
export declare class TranslationRequestsUpdateTranslationRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
