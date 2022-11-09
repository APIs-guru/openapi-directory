import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SetVaultNotificationsPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class SetVaultNotificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Represents a vault's notification configuration.
**/
export declare class SetVaultNotificationsRequestBodyVaultNotificationConfig extends SpeakeasyBase {
    events?: string[];
    snsTopic?: string;
}
export declare class SetVaultNotificationsRequestBody extends SpeakeasyBase {
    vaultNotificationConfig?: SetVaultNotificationsRequestBodyVaultNotificationConfig;
}
export declare class SetVaultNotificationsRequest extends SpeakeasyBase {
    pathParams: SetVaultNotificationsPathParams;
    headers: SetVaultNotificationsHeaders;
    request: SetVaultNotificationsRequestBody;
}
export declare class SetVaultNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
