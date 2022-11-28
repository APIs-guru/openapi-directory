import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetTriggersXAmzTargetEnum {
    AwsGlueBatchGetTriggers = "AWSGlue.BatchGetTriggers"
}
export declare class BatchGetTriggersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetTriggersXAmzTargetEnum;
}
export declare class BatchGetTriggersRequest extends SpeakeasyBase {
    headers: BatchGetTriggersHeaders;
    request: shared.BatchGetTriggersRequest;
}
export declare class BatchGetTriggersResponse extends SpeakeasyBase {
    batchGetTriggersResponse?: shared.BatchGetTriggersResponse;
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
