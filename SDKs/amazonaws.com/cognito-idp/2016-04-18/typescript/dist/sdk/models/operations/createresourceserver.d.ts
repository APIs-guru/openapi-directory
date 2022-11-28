import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateResourceServerXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceCreateResourceServer = "AWSCognitoIdentityProviderService.CreateResourceServer"
}
export declare class CreateResourceServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResourceServerXAmzTargetEnum;
}
export declare class CreateResourceServerRequest extends SpeakeasyBase {
    headers: CreateResourceServerHeaders;
    request: shared.CreateResourceServerRequest;
}
export declare class CreateResourceServerResponse extends SpeakeasyBase {
    contentType: string;
    createResourceServerResponse?: shared.CreateResourceServerResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
