import { SpeakeasyBase } from "../../../internal/utils";
export declare class InitiateVaultLockPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class InitiateVaultLockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains the vault lock policy.
**/
export declare class InitiateVaultLockRequestBodyPolicy extends SpeakeasyBase {
    policy?: string;
}
export declare class InitiateVaultLockRequestBody extends SpeakeasyBase {
    policy?: InitiateVaultLockRequestBodyPolicy;
}
export declare class InitiateVaultLockRequest extends SpeakeasyBase {
    pathParams: InitiateVaultLockPathParams;
    headers: InitiateVaultLockHeaders;
    request: InitiateVaultLockRequestBody;
}
export declare class InitiateVaultLockResponse extends SpeakeasyBase {
    contentType: string;
    initiateVaultLockOutput?: Map<string, any>;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
