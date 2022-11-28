import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdatePartitionXAmzTargetEnum {
    AwsGlueUpdatePartition = "AWSGlue.UpdatePartition"
}
export declare class UpdatePartitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePartitionXAmzTargetEnum;
}
export declare class UpdatePartitionRequest extends SpeakeasyBase {
    headers: UpdatePartitionHeaders;
    request: shared.UpdatePartitionRequest;
}
export declare class UpdatePartitionResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updatePartitionResponse?: Map<string, any>;
}
