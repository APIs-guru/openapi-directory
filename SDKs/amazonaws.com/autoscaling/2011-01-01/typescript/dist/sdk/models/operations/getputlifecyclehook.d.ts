import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPutLifecycleHookActionEnum {
    PutLifecycleHook = "PutLifecycleHook"
}
export declare enum GetPutLifecycleHookVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetPutLifecycleHookQueryParams extends SpeakeasyBase {
    action: GetPutLifecycleHookActionEnum;
    autoScalingGroupName: string;
    defaultResult?: string;
    heartbeatTimeout?: number;
    lifecycleHookName: string;
    lifecycleTransition?: string;
    notificationMetadata?: string;
    notificationTargetArn?: string;
    roleArn?: string;
    version: GetPutLifecycleHookVersionEnum;
}
export declare class GetPutLifecycleHookHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPutLifecycleHookRequest extends SpeakeasyBase {
    queryParams: GetPutLifecycleHookQueryParams;
    headers: GetPutLifecycleHookHeaders;
}
export declare class GetPutLifecycleHookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
