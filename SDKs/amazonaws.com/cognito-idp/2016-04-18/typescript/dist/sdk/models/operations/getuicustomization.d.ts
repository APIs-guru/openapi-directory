import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUiCustomizationXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceGetUiCustomization = "AWSCognitoIdentityProviderService.GetUICustomization"
}
export declare class GetUiCustomizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUiCustomizationXAmzTargetEnum;
}
export declare class GetUiCustomizationRequest extends SpeakeasyBase {
    headers: GetUiCustomizationHeaders;
    request: shared.GetUiCustomizationRequest;
}
export declare class GetUiCustomizationResponse extends SpeakeasyBase {
    contentType: string;
    getUiCustomizationResponse?: shared.GetUiCustomizationResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
