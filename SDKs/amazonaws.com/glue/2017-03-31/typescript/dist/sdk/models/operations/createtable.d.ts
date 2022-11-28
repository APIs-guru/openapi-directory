import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTableXAmzTargetEnum {
    AwsGlueCreateTable = "AWSGlue.CreateTable"
}
export declare class CreateTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTableXAmzTargetEnum;
}
export declare class CreateTableRequest extends SpeakeasyBase {
    headers: CreateTableHeaders;
    request: shared.CreateTableRequest;
}
export declare class CreateTableResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createTableResponse?: Map<string, any>;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
