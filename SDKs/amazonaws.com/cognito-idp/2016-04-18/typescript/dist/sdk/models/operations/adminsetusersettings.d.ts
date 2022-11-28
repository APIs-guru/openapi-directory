import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminSetUserSettingsXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminSetUserSettings = "AWSCognitoIdentityProviderService.AdminSetUserSettings"
}
export declare class AdminSetUserSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminSetUserSettingsXAmzTargetEnum;
}
export declare class AdminSetUserSettingsRequest extends SpeakeasyBase {
    headers: AdminSetUserSettingsHeaders;
    request: shared.AdminSetUserSettingsRequest;
}
export declare class AdminSetUserSettingsResponse extends SpeakeasyBase {
    adminSetUserSettingsResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    userNotFoundException?: any;
}
