import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePartitionXAmzTargetEnum {
    AwsGlueCreatePartition = "AWSGlue.CreatePartition"
}
export declare class CreatePartitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePartitionXAmzTargetEnum;
}
export declare class CreatePartitionRequest extends SpeakeasyBase {
    headers: CreatePartitionHeaders;
    request: shared.CreatePartitionRequest;
}
export declare class CreatePartitionResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    contentType: string;
    createPartitionResponse?: Map<string, any>;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
