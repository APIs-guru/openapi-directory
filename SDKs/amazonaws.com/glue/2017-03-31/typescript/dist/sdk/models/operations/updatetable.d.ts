import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTableXAmzTargetEnum {
    AwsGlueUpdateTable = "AWSGlue.UpdateTable"
}
export declare class UpdateTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTableXAmzTargetEnum;
}
export declare class UpdateTableRequest extends SpeakeasyBase {
    headers: UpdateTableHeaders;
    request: shared.UpdateTableRequest;
}
export declare class UpdateTableResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
    updateTableResponse?: Map<string, any>;
}
