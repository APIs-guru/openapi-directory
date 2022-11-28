import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetVaultAccessPolicyPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class SetVaultAccessPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains the vault access policy.
**/
export declare class SetVaultAccessPolicyRequestBodyPolicy extends SpeakeasyBase {
    policy?: string;
}
export declare class SetVaultAccessPolicyRequestBody extends SpeakeasyBase {
    policy?: SetVaultAccessPolicyRequestBodyPolicy;
}
export declare class SetVaultAccessPolicyRequest extends SpeakeasyBase {
    pathParams: SetVaultAccessPolicyPathParams;
    headers: SetVaultAccessPolicyHeaders;
    request: SetVaultAccessPolicyRequestBody;
}
export declare class SetVaultAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
