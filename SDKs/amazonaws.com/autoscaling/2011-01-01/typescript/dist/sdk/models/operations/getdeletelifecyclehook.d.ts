import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteLifecycleHookActionEnum {
    DeleteLifecycleHook = "DeleteLifecycleHook"
}
export declare enum GetDeleteLifecycleHookVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetDeleteLifecycleHookQueryParams extends SpeakeasyBase {
    action: GetDeleteLifecycleHookActionEnum;
    autoScalingGroupName: string;
    lifecycleHookName: string;
    version: GetDeleteLifecycleHookVersionEnum;
}
export declare class GetDeleteLifecycleHookHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteLifecycleHookRequest extends SpeakeasyBase {
    queryParams: GetDeleteLifecycleHookQueryParams;
    headers: GetDeleteLifecycleHookHeaders;
}
export declare class GetDeleteLifecycleHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
