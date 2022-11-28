import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateVaultPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class CreateVaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateVaultRequest extends SpeakeasyBase {
    pathParams: CreateVaultPathParams;
    headers: CreateVaultHeaders;
}
export declare class CreateVaultResponse extends SpeakeasyBase {
    contentType: string;
    createVaultOutput?: Map<string, any>;
    invalidParameterValueException?: any;
    limitExceededException?: any;
    missingParameterValueException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
