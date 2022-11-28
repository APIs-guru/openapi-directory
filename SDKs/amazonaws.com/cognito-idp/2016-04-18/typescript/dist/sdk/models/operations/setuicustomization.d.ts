import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetUiCustomizationXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceSetUiCustomization = "AWSCognitoIdentityProviderService.SetUICustomization"
}
export declare class SetUiCustomizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetUiCustomizationXAmzTargetEnum;
}
export declare class SetUiCustomizationRequest extends SpeakeasyBase {
    headers: SetUiCustomizationHeaders;
    request: shared.SetUiCustomizationRequest;
}
export declare class SetUiCustomizationResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    setUiCustomizationResponse?: shared.SetUiCustomizationResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
