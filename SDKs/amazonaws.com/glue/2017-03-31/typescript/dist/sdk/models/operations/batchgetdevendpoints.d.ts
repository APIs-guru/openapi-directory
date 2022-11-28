import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetDevEndpointsXAmzTargetEnum {
    AwsGlueBatchGetDevEndpoints = "AWSGlue.BatchGetDevEndpoints"
}
export declare class BatchGetDevEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetDevEndpointsXAmzTargetEnum;
}
export declare class BatchGetDevEndpointsRequest extends SpeakeasyBase {
    headers: BatchGetDevEndpointsHeaders;
    request: shared.BatchGetDevEndpointsRequest;
}
export declare class BatchGetDevEndpointsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchGetDevEndpointsResponse?: shared.BatchGetDevEndpointsResponse;
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
