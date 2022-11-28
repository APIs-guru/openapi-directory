import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteVaultNotificationsPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class DeleteVaultNotificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteVaultNotificationsRequest extends SpeakeasyBase {
    pathParams: DeleteVaultNotificationsPathParams;
    headers: DeleteVaultNotificationsHeaders;
}
export declare class DeleteVaultNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
