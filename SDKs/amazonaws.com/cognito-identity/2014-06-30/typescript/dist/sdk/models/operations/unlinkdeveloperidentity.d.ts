import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UnlinkDeveloperIdentityXAmzTargetEnum {
    AwsCognitoIdentityServiceUnlinkDeveloperIdentity = "AWSCognitoIdentityService.UnlinkDeveloperIdentity"
}
export declare class UnlinkDeveloperIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnlinkDeveloperIdentityXAmzTargetEnum;
}
export declare class UnlinkDeveloperIdentityRequest extends SpeakeasyBase {
    headers: UnlinkDeveloperIdentityHeaders;
    request: shared.UnlinkDeveloperIdentityInput;
}
export declare class UnlinkDeveloperIdentityResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
