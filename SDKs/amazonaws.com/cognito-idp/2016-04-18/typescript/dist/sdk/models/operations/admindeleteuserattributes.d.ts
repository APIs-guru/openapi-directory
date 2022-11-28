import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminDeleteUserAttributesXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminDeleteUserAttributes = "AWSCognitoIdentityProviderService.AdminDeleteUserAttributes"
}
export declare class AdminDeleteUserAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminDeleteUserAttributesXAmzTargetEnum;
}
export declare class AdminDeleteUserAttributesRequest extends SpeakeasyBase {
    headers: AdminDeleteUserAttributesHeaders;
    request: shared.AdminDeleteUserAttributesRequest;
}
export declare class AdminDeleteUserAttributesResponse extends SpeakeasyBase {
    adminDeleteUserAttributesResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
