import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDatabaseXAmzTargetEnum {
    AwsGlueCreateDatabase = "AWSGlue.CreateDatabase"
}
export declare class CreateDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDatabaseXAmzTargetEnum;
}
export declare class CreateDatabaseRequest extends SpeakeasyBase {
    headers: CreateDatabaseHeaders;
    request: shared.CreateDatabaseRequest;
}
export declare class CreateDatabaseResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createDatabaseResponse?: Map<string, any>;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
