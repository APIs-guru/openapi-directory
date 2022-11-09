import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchSnoozeAlarmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchSnoozeAlarmRequestBody extends SpeakeasyBase {
    snoozeActionRequests: shared.SnoozeAlarmActionRequest[];
}
export declare class BatchSnoozeAlarmRequest extends SpeakeasyBase {
    headers: BatchSnoozeAlarmHeaders;
    request: BatchSnoozeAlarmRequestBody;
}
export declare class BatchSnoozeAlarmResponse extends SpeakeasyBase {
    batchSnoozeAlarmResponse?: shared.BatchSnoozeAlarmResponse;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
