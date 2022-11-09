import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRecordLifecycleActionHeartbeatActionEnum {
    RecordLifecycleActionHeartbeat = "RecordLifecycleActionHeartbeat"
}
export declare enum PostRecordLifecycleActionHeartbeatVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class PostRecordLifecycleActionHeartbeatQueryParams extends SpeakeasyBase {
    action: PostRecordLifecycleActionHeartbeatActionEnum;
    version: PostRecordLifecycleActionHeartbeatVersionEnum;
}
export declare class PostRecordLifecycleActionHeartbeatHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRecordLifecycleActionHeartbeatRequest extends SpeakeasyBase {
    queryParams: PostRecordLifecycleActionHeartbeatQueryParams;
    headers: PostRecordLifecycleActionHeartbeatHeaders;
    request?: Uint8Array;
}
export declare class PostRecordLifecycleActionHeartbeatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
