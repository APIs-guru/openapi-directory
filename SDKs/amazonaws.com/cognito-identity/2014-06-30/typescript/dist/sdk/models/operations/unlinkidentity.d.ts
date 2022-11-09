import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UnlinkIdentityXAmzTargetEnum {
    AwsCognitoIdentityServiceUnlinkIdentity = "AWSCognitoIdentityService.UnlinkIdentity"
}
export declare class UnlinkIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnlinkIdentityXAmzTargetEnum;
}
export declare class UnlinkIdentityRequest extends SpeakeasyBase {
    headers: UnlinkIdentityHeaders;
    request: shared.UnlinkIdentityInput;
}
export declare class UnlinkIdentityResponse extends SpeakeasyBase {
    contentType: string;
    externalServiceException?: any;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
