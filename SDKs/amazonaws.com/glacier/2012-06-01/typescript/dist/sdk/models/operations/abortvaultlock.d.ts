import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AbortVaultLockPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class AbortVaultLockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AbortVaultLockRequest extends SpeakeasyBase {
    pathParams: AbortVaultLockPathParams;
    headers: AbortVaultLockHeaders;
}
export declare class AbortVaultLockResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
