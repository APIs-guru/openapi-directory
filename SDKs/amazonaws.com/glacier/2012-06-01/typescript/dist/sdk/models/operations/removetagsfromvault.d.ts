import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RemoveTagsFromVaultPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare enum RemoveTagsFromVaultOperationEnum {
    Remove = "remove"
}
export declare class RemoveTagsFromVaultQueryParams extends SpeakeasyBase {
    operation: RemoveTagsFromVaultOperationEnum;
}
export declare class RemoveTagsFromVaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveTagsFromVaultRequestBody extends SpeakeasyBase {
    tagKeys?: string[];
}
export declare class RemoveTagsFromVaultRequest extends SpeakeasyBase {
    pathParams: RemoveTagsFromVaultPathParams;
    queryParams: RemoveTagsFromVaultQueryParams;
    headers: RemoveTagsFromVaultHeaders;
    request: RemoveTagsFromVaultRequestBody;
}
export declare class RemoveTagsFromVaultResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
