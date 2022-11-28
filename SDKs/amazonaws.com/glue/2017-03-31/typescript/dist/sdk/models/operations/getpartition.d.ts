import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPartitionXAmzTargetEnum {
    AwsGlueGetPartition = "AWSGlue.GetPartition"
}
export declare class GetPartitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPartitionXAmzTargetEnum;
}
export declare class GetPartitionRequest extends SpeakeasyBase {
    headers: GetPartitionHeaders;
    request: shared.GetPartitionRequest;
}
export declare class GetPartitionResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getPartitionResponse?: shared.GetPartitionResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
