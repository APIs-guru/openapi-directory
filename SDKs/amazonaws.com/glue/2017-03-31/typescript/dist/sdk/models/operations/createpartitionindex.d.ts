import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreatePartitionIndexXAmzTargetEnum {
    AwsGlueCreatePartitionIndex = "AWSGlue.CreatePartitionIndex"
}
export declare class CreatePartitionIndexHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePartitionIndexXAmzTargetEnum;
}
export declare class CreatePartitionIndexRequest extends SpeakeasyBase {
    headers: CreatePartitionIndexHeaders;
    request: shared.CreatePartitionIndexRequest;
}
export declare class CreatePartitionIndexResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    contentType: string;
    createPartitionIndexResponse?: Map<string, any>;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
