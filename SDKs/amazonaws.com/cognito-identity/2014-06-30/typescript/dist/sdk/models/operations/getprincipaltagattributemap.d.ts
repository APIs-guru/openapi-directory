import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPrincipalTagAttributeMapXAmzTargetEnum {
    AwsCognitoIdentityServiceGetPrincipalTagAttributeMap = "AWSCognitoIdentityService.GetPrincipalTagAttributeMap"
}
export declare class GetPrincipalTagAttributeMapHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPrincipalTagAttributeMapXAmzTargetEnum;
}
export declare class GetPrincipalTagAttributeMapRequest extends SpeakeasyBase {
    headers: GetPrincipalTagAttributeMapHeaders;
    request: shared.GetPrincipalTagAttributeMapInput;
}
export declare class GetPrincipalTagAttributeMapResponse extends SpeakeasyBase {
    contentType: string;
    getPrincipalTagAttributeMapResponse?: shared.GetPrincipalTagAttributeMapResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
