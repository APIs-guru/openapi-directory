import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeletePartitionXAmzTargetEnum {
    AwsGlueDeletePartition = "AWSGlue.DeletePartition"
}
export declare class DeletePartitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePartitionXAmzTargetEnum;
}
export declare class DeletePartitionRequest extends SpeakeasyBase {
    headers: DeletePartitionHeaders;
    request: shared.DeletePartitionRequest;
}
export declare class DeletePartitionResponse extends SpeakeasyBase {
    contentType: string;
    deletePartitionResponse?: Map<string, any>;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
