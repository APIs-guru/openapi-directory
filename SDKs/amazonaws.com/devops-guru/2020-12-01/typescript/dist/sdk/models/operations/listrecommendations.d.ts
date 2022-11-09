import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListRecommendationsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class ListRecommendationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ListRecommendationsRequestBodyLocaleEnum {
    DeDe = "DE_DE",
    EnUs = "EN_US",
    EnGb = "EN_GB",
    EsEs = "ES_ES",
    FrFr = "FR_FR",
    ItIt = "IT_IT",
    JaJp = "JA_JP",
    KoKr = "KO_KR",
    PtBr = "PT_BR",
    ZhCn = "ZH_CN",
    ZhTw = "ZH_TW"
}
export declare class ListRecommendationsRequestBody extends SpeakeasyBase {
    insightId: string;
    locale?: ListRecommendationsRequestBodyLocaleEnum;
    nextToken?: string;
}
export declare class ListRecommendationsRequest extends SpeakeasyBase {
    queryParams: ListRecommendationsQueryParams;
    headers: ListRecommendationsHeaders;
    request: ListRecommendationsRequestBody;
}
export declare class ListRecommendationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listRecommendationsResponse?: shared.ListRecommendationsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
