import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTagsForVaultPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class ListTagsForVaultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForVaultRequest extends SpeakeasyBase {
    pathParams: ListTagsForVaultPathParams;
    headers: ListTagsForVaultHeaders;
}
export declare class ListTagsForVaultResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listTagsForVaultOutput?: shared.ListTagsForVaultOutput;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
