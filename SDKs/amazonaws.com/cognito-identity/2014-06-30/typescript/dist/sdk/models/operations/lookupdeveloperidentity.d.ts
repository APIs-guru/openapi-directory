import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum LookupDeveloperIdentityXAmzTargetEnum {
    AwsCognitoIdentityServiceLookupDeveloperIdentity = "AWSCognitoIdentityService.LookupDeveloperIdentity"
}
export declare class LookupDeveloperIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: LookupDeveloperIdentityXAmzTargetEnum;
}
export declare class LookupDeveloperIdentityRequest extends SpeakeasyBase {
    headers: LookupDeveloperIdentityHeaders;
    request: shared.LookupDeveloperIdentityInput;
}
export declare class LookupDeveloperIdentityResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    lookupDeveloperIdentityResponse?: shared.LookupDeveloperIdentityResponse;
    notAuthorizedException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
