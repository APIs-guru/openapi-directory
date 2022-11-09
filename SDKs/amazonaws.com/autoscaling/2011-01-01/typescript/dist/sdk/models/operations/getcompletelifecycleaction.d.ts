import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCompleteLifecycleActionActionEnum {
    CompleteLifecycleAction = "CompleteLifecycleAction"
}
export declare enum GetCompleteLifecycleActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetCompleteLifecycleActionQueryParams extends SpeakeasyBase {
    action: GetCompleteLifecycleActionActionEnum;
    autoScalingGroupName: string;
    instanceId?: string;
    lifecycleActionResult: string;
    lifecycleActionToken?: string;
    lifecycleHookName: string;
    version: GetCompleteLifecycleActionVersionEnum;
}
export declare class GetCompleteLifecycleActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCompleteLifecycleActionRequest extends SpeakeasyBase {
    queryParams: GetCompleteLifecycleActionQueryParams;
    headers: GetCompleteLifecycleActionHeaders;
}
export declare class GetCompleteLifecycleActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
