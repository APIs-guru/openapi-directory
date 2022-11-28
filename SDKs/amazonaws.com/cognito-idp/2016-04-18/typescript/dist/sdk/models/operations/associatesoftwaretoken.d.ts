import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateSoftwareTokenXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAssociateSoftwareToken = "AWSCognitoIdentityProviderService.AssociateSoftwareToken"
}
export declare class AssociateSoftwareTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateSoftwareTokenXAmzTargetEnum;
}
export declare class AssociateSoftwareTokenRequest extends SpeakeasyBase {
    headers: AssociateSoftwareTokenHeaders;
    request: shared.AssociateSoftwareTokenRequest;
}
export declare class AssociateSoftwareTokenResponse extends SpeakeasyBase {
    associateSoftwareTokenResponse?: shared.AssociateSoftwareTokenResponse;
    concurrentModificationException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    softwareTokenMfaNotFoundException?: any;
    statusCode: number;
}
