import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeLifecycleHooksActionEnum {
    DescribeLifecycleHooks = "DescribeLifecycleHooks"
}
export declare enum GetDescribeLifecycleHooksVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDescribeLifecycleHooksQueryParams extends SpeakeasyBase {
    action: GetDescribeLifecycleHooksActionEnum;
    autoScalingGroupName: string;
    lifecycleHookNames?: string[];
    version: GetDescribeLifecycleHooksVersionEnum;
}
export declare class GetDescribeLifecycleHooksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeLifecycleHooksRequest extends SpeakeasyBase {
    queryParams: GetDescribeLifecycleHooksQueryParams;
    headers: GetDescribeLifecycleHooksHeaders;
}
export declare class GetDescribeLifecycleHooksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
