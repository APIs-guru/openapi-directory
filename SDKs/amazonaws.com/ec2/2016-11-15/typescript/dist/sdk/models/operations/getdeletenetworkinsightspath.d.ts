import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteNetworkInsightsPathActionEnum {
    DeleteNetworkInsightsPath = "DeleteNetworkInsightsPath"
}
export declare enum GetDeleteNetworkInsightsPathVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteNetworkInsightsPathQueryParams extends SpeakeasyBase {
    action: GetDeleteNetworkInsightsPathActionEnum;
    dryRun?: boolean;
    networkInsightsPathId: string;
    version: GetDeleteNetworkInsightsPathVersionEnum;
}
export declare class GetDeleteNetworkInsightsPathHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteNetworkInsightsPathRequest extends SpeakeasyBase {
    queryParams: GetDeleteNetworkInsightsPathQueryParams;
    headers: GetDeleteNetworkInsightsPathHeaders;
}
export declare class GetDeleteNetworkInsightsPathResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
