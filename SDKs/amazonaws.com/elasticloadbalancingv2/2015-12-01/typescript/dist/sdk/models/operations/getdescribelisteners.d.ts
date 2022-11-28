import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeListenersActionEnum {
    DescribeListeners = "DescribeListeners"
}
export declare enum GetDescribeListenersVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GetDescribeListenersQueryParams extends SpeakeasyBase {
    action: GetDescribeListenersActionEnum;
    listenerArns?: string[];
    loadBalancerArn?: string;
    marker?: string;
    pageSize?: number;
    version: GetDescribeListenersVersionEnum;
}
export declare class GetDescribeListenersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeListenersRequest extends SpeakeasyBase {
    queryParams: GetDescribeListenersQueryParams;
    headers: GetDescribeListenersHeaders;
}
export declare class GetDescribeListenersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
