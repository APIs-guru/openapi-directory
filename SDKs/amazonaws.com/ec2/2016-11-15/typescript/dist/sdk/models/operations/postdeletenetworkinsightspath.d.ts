import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteNetworkInsightsPathActionEnum {
    DeleteNetworkInsightsPath = "DeleteNetworkInsightsPath"
}
export declare enum PostDeleteNetworkInsightsPathVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteNetworkInsightsPathQueryParams extends SpeakeasyBase {
    action: PostDeleteNetworkInsightsPathActionEnum;
    version: PostDeleteNetworkInsightsPathVersionEnum;
}
export declare class PostDeleteNetworkInsightsPathHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteNetworkInsightsPathRequest extends SpeakeasyBase {
    queryParams: PostDeleteNetworkInsightsPathQueryParams;
    headers: PostDeleteNetworkInsightsPathHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteNetworkInsightsPathResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
