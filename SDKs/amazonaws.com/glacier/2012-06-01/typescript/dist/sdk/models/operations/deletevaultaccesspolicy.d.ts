import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteVaultAccessPolicyPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class DeleteVaultAccessPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteVaultAccessPolicyRequest extends SpeakeasyBase {
    pathParams: DeleteVaultAccessPolicyPathParams;
    headers: DeleteVaultAccessPolicyHeaders;
}
export declare class DeleteVaultAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
