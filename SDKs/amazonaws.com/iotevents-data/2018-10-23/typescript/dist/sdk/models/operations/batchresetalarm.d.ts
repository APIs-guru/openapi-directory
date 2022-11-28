import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchResetAlarmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchResetAlarmRequestBody extends SpeakeasyBase {
    resetActionRequests: shared.ResetAlarmActionRequest[];
}
export declare class BatchResetAlarmRequest extends SpeakeasyBase {
    headers: BatchResetAlarmHeaders;
    request: BatchResetAlarmRequestBody;
}
export declare class BatchResetAlarmResponse extends SpeakeasyBase {
    batchResetAlarmResponse?: shared.BatchResetAlarmResponse;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
