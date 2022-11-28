import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVaultLockPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class GetVaultLockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetVaultLockRequest extends SpeakeasyBase {
    pathParams: GetVaultLockPathParams;
    headers: GetVaultLockHeaders;
}
export declare class GetVaultLockResponse extends SpeakeasyBase {
    contentType: string;
    getVaultLockOutput?: shared.GetVaultLockOutput;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
