import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateRealtimeLogConfig20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateRealtimeLogConfig20200531Request extends SpeakeasyBase {
    headers: UpdateRealtimeLogConfig20200531Headers;
    request: Uint8Array;
}
export declare class UpdateRealtimeLogConfig20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
