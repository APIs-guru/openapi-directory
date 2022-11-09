import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateNetworkInsightsPathActionEnum {
    CreateNetworkInsightsPath = "CreateNetworkInsightsPath"
}
export declare enum PostCreateNetworkInsightsPathVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateNetworkInsightsPathQueryParams extends SpeakeasyBase {
    action: PostCreateNetworkInsightsPathActionEnum;
    version: PostCreateNetworkInsightsPathVersionEnum;
}
export declare class PostCreateNetworkInsightsPathHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateNetworkInsightsPathRequest extends SpeakeasyBase {
    queryParams: PostCreateNetworkInsightsPathQueryParams;
    headers: PostCreateNetworkInsightsPathHeaders;
    request?: Uint8Array;
}
export declare class PostCreateNetworkInsightsPathResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
