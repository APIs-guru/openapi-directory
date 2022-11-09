import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRecordLifecycleActionHeartbeatActionEnum {
    RecordLifecycleActionHeartbeat = "RecordLifecycleActionHeartbeat"
}
export declare enum GetRecordLifecycleActionHeartbeatVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetRecordLifecycleActionHeartbeatQueryParams extends SpeakeasyBase {
    action: GetRecordLifecycleActionHeartbeatActionEnum;
    autoScalingGroupName: string;
    instanceId?: string;
    lifecycleActionToken?: string;
    lifecycleHookName: string;
    version: GetRecordLifecycleActionHeartbeatVersionEnum;
}
export declare class GetRecordLifecycleActionHeartbeatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRecordLifecycleActionHeartbeatRequest extends SpeakeasyBase {
    queryParams: GetRecordLifecycleActionHeartbeatQueryParams;
    headers: GetRecordLifecycleActionHeartbeatHeaders;
}
export declare class GetRecordLifecycleActionHeartbeatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
