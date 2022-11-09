import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SetPrincipalTagAttributeMapXAmzTargetEnum {
    AwsCognitoIdentityServiceSetPrincipalTagAttributeMap = "AWSCognitoIdentityService.SetPrincipalTagAttributeMap"
}
export declare class SetPrincipalTagAttributeMapHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetPrincipalTagAttributeMapXAmzTargetEnum;
}
export declare class SetPrincipalTagAttributeMapRequest extends SpeakeasyBase {
    headers: SetPrincipalTagAttributeMapHeaders;
    request: shared.SetPrincipalTagAttributeMapInput;
}
export declare class SetPrincipalTagAttributeMapResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    setPrincipalTagAttributeMapResponse?: shared.SetPrincipalTagAttributeMapResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
