import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDatabaseXAmzTargetEnum {
    AwsGlueGetDatabase = "AWSGlue.GetDatabase"
}
export declare class GetDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDatabaseXAmzTargetEnum;
}
export declare class GetDatabaseRequest extends SpeakeasyBase {
    headers: GetDatabaseHeaders;
    request: shared.GetDatabaseRequest;
}
export declare class GetDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getDatabaseResponse?: shared.GetDatabaseResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
