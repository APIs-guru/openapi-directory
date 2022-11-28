import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDatabaseXAmzTargetEnum {
    AwsGlueDeleteDatabase = "AWSGlue.DeleteDatabase"
}
export declare class DeleteDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDatabaseXAmzTargetEnum;
}
export declare class DeleteDatabaseRequest extends SpeakeasyBase {
    headers: DeleteDatabaseHeaders;
    request: shared.DeleteDatabaseRequest;
}
export declare class DeleteDatabaseResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteDatabaseResponse?: Map<string, any>;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
