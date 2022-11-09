import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteVaultPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class DeleteVaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteVaultRequest extends SpeakeasyBase {
    pathParams: DeleteVaultPathParams;
    headers: DeleteVaultHeaders;
}
export declare class DeleteVaultResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
