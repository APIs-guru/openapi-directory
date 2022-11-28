import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddTagsToVaultPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare enum AddTagsToVaultOperationEnum {
    Add = "add"
}
export declare class AddTagsToVaultQueryParams extends SpeakeasyBase {
    operation: AddTagsToVaultOperationEnum;
}
export declare class AddTagsToVaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddTagsToVaultRequestBody extends SpeakeasyBase {
    tags?: Map<string, string>;
}
export declare class AddTagsToVaultRequest extends SpeakeasyBase {
    pathParams: AddTagsToVaultPathParams;
    queryParams: AddTagsToVaultQueryParams;
    headers: AddTagsToVaultHeaders;
    request: AddTagsToVaultRequestBody;
}
export declare class AddTagsToVaultResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    limitExceededException?: any;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
