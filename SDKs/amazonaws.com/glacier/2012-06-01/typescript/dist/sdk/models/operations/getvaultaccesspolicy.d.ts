import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetVaultAccessPolicyPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class GetVaultAccessPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetVaultAccessPolicyRequest extends SpeakeasyBase {
    pathParams: GetVaultAccessPolicyPathParams;
    headers: GetVaultAccessPolicyHeaders;
}
export declare class GetVaultAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    getVaultAccessPolicyOutput?: shared.GetVaultAccessPolicyOutput;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
