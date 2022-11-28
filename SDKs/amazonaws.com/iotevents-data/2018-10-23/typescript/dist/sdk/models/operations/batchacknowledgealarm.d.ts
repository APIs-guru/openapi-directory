import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchAcknowledgeAlarmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchAcknowledgeAlarmRequestBody extends SpeakeasyBase {
    acknowledgeActionRequests: shared.AcknowledgeAlarmActionRequest[];
}
export declare class BatchAcknowledgeAlarmRequest extends SpeakeasyBase {
    headers: BatchAcknowledgeAlarmHeaders;
    request: BatchAcknowledgeAlarmRequestBody;
}
export declare class BatchAcknowledgeAlarmResponse extends SpeakeasyBase {
    batchAcknowledgeAlarmResponse?: shared.BatchAcknowledgeAlarmResponse;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
