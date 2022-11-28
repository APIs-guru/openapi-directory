import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterSchemaVersionXAmzTargetEnum {
    AwsGlueRegisterSchemaVersion = "AWSGlue.RegisterSchemaVersion"
}
export declare class RegisterSchemaVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterSchemaVersionXAmzTargetEnum;
}
export declare class RegisterSchemaVersionRequest extends SpeakeasyBase {
    headers: RegisterSchemaVersionHeaders;
    request: shared.RegisterSchemaVersionInput;
}
export declare class RegisterSchemaVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    registerSchemaVersionResponse?: shared.RegisterSchemaVersionResponse;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
