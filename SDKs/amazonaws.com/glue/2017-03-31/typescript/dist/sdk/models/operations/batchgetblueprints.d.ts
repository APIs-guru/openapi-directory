import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetBlueprintsXAmzTargetEnum {
    AwsGlueBatchGetBlueprints = "AWSGlue.BatchGetBlueprints"
}
export declare class BatchGetBlueprintsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetBlueprintsXAmzTargetEnum;
}
export declare class BatchGetBlueprintsRequest extends SpeakeasyBase {
    headers: BatchGetBlueprintsHeaders;
    request: shared.BatchGetBlueprintsRequest;
}
export declare class BatchGetBlueprintsResponse extends SpeakeasyBase {
    batchGetBlueprintsResponse?: shared.BatchGetBlueprintsResponse;
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
