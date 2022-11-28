import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchEnableAlarmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchEnableAlarmRequestBody extends SpeakeasyBase {
    enableActionRequests: shared.EnableAlarmActionRequest[];
}
export declare class BatchEnableAlarmRequest extends SpeakeasyBase {
    headers: BatchEnableAlarmHeaders;
    request: BatchEnableAlarmRequestBody;
}
export declare class BatchEnableAlarmResponse extends SpeakeasyBase {
    batchEnableAlarmResponse?: shared.BatchEnableAlarmResponse;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
