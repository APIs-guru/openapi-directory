import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateConnectionXAmzTargetEnum {
    AwsGlueCreateConnection = "AWSGlue.CreateConnection"
}
export declare class CreateConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConnectionXAmzTargetEnum;
}
export declare class CreateConnectionRequest extends SpeakeasyBase {
    headers: CreateConnectionHeaders;
    request: shared.CreateConnectionRequest;
}
export declare class CreateConnectionResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    contentType: string;
    createConnectionResponse?: Map<string, any>;
    glueEncryptionException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
