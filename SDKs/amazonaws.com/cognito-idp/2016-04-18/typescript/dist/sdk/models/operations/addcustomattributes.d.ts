import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddCustomAttributesXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAddCustomAttributes = "AWSCognitoIdentityProviderService.AddCustomAttributes"
}
export declare class AddCustomAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddCustomAttributesXAmzTargetEnum;
}
export declare class AddCustomAttributesRequest extends SpeakeasyBase {
    headers: AddCustomAttributesHeaders;
    request: shared.AddCustomAttributesRequest;
}
export declare class AddCustomAttributesResponse extends SpeakeasyBase {
    addCustomAttributesResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userImportInProgressException?: any;
}
