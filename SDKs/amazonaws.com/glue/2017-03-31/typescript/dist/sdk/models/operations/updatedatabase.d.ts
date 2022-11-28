import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDatabaseXAmzTargetEnum {
    AwsGlueUpdateDatabase = "AWSGlue.UpdateDatabase"
}
export declare class UpdateDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDatabaseXAmzTargetEnum;
}
export declare class UpdateDatabaseRequest extends SpeakeasyBase {
    headers: UpdateDatabaseHeaders;
    request: shared.UpdateDatabaseRequest;
}
export declare class UpdateDatabaseResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateDatabaseResponse?: Map<string, any>;
}
