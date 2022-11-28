import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetIdentityProviderByIdentifierXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceGetIdentityProviderByIdentifier = "AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier"
}
export declare class GetIdentityProviderByIdentifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetIdentityProviderByIdentifierXAmzTargetEnum;
}
export declare class GetIdentityProviderByIdentifierRequest extends SpeakeasyBase {
    headers: GetIdentityProviderByIdentifierHeaders;
    request: shared.GetIdentityProviderByIdentifierRequest;
}
export declare class GetIdentityProviderByIdentifierResponse extends SpeakeasyBase {
    contentType: string;
    getIdentityProviderByIdentifierResponse?: shared.GetIdentityProviderByIdentifierResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
