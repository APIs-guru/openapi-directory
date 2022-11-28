import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchDisableAlarmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDisableAlarmRequestBody extends SpeakeasyBase {
    disableActionRequests: shared.DisableAlarmActionRequest[];
}
export declare class BatchDisableAlarmRequest extends SpeakeasyBase {
    headers: BatchDisableAlarmHeaders;
    request: BatchDisableAlarmRequestBody;
}
export declare class BatchDisableAlarmResponse extends SpeakeasyBase {
    batchDisableAlarmResponse?: shared.BatchDisableAlarmResponse;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
