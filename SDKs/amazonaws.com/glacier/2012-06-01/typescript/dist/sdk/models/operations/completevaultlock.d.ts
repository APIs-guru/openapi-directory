import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CompleteVaultLockPathParams extends SpeakeasyBase {
    accountId: string;
    lockId: string;
    vaultName: string;
}
export declare class CompleteVaultLockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CompleteVaultLockRequest extends SpeakeasyBase {
    pathParams: CompleteVaultLockPathParams;
    headers: CompleteVaultLockHeaders;
}
export declare class CompleteVaultLockResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
