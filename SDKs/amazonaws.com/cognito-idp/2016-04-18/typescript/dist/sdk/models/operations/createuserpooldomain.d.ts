import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateUserPoolDomainXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceCreateUserPoolDomain = "AWSCognitoIdentityProviderService.CreateUserPoolDomain"
}
export declare class CreateUserPoolDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserPoolDomainXAmzTargetEnum;
}
export declare class CreateUserPoolDomainRequest extends SpeakeasyBase {
    headers: CreateUserPoolDomainHeaders;
    request: shared.CreateUserPoolDomainRequest;
}
export declare class CreateUserPoolDomainResponse extends SpeakeasyBase {
    contentType: string;
    createUserPoolDomainResponse?: shared.CreateUserPoolDomainResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
