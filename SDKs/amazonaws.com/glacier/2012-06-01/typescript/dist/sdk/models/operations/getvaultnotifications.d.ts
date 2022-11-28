import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVaultNotificationsPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class GetVaultNotificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetVaultNotificationsRequest extends SpeakeasyBase {
    pathParams: GetVaultNotificationsPathParams;
    headers: GetVaultNotificationsHeaders;
}
export declare class GetVaultNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    getVaultNotificationsOutput?: shared.GetVaultNotificationsOutput;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
