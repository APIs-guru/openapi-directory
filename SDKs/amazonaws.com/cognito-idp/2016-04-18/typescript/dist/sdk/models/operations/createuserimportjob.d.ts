import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateUserImportJobXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceCreateUserImportJob = "AWSCognitoIdentityProviderService.CreateUserImportJob"
}
export declare class CreateUserImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserImportJobXAmzTargetEnum;
}
export declare class CreateUserImportJobRequest extends SpeakeasyBase {
    headers: CreateUserImportJobHeaders;
    request: shared.CreateUserImportJobRequest;
}
export declare class CreateUserImportJobResponse extends SpeakeasyBase {
    contentType: string;
    createUserImportJobResponse?: shared.CreateUserImportJobResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    preconditionNotMetException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
