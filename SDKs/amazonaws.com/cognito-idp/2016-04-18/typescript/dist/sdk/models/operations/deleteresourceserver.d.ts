import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteResourceServerXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDeleteResourceServer = "AWSCognitoIdentityProviderService.DeleteResourceServer"
}
export declare class DeleteResourceServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourceServerXAmzTargetEnum;
}
export declare class DeleteResourceServerRequest extends SpeakeasyBase {
    headers: DeleteResourceServerHeaders;
    request: shared.DeleteResourceServerRequest;
}
export declare class DeleteResourceServerResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
