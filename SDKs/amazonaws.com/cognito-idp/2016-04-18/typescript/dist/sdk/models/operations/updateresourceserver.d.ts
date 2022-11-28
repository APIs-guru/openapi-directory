import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateResourceServerXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateResourceServer = "AWSCognitoIdentityProviderService.UpdateResourceServer"
}
export declare class UpdateResourceServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResourceServerXAmzTargetEnum;
}
export declare class UpdateResourceServerRequest extends SpeakeasyBase {
    headers: UpdateResourceServerHeaders;
    request: shared.UpdateResourceServerRequest;
}
export declare class UpdateResourceServerResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateResourceServerResponse?: shared.UpdateResourceServerResponse;
}
