import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPartsPathParams extends SpeakeasyBase {
    accountId: string;
    uploadId: string;
    vaultName: string;
}
export declare class ListPartsQueryParams extends SpeakeasyBase {
    limit?: string;
    marker?: string;
}
export declare class ListPartsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPartsRequest extends SpeakeasyBase {
    pathParams: ListPartsPathParams;
    queryParams: ListPartsQueryParams;
    headers: ListPartsHeaders;
}
export declare class ListPartsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listPartsOutput?: shared.ListPartsOutput;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
