import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListMultipartUploadsPathParams extends SpeakeasyBase {
    accountId: string;
    vaultName: string;
}
export declare class ListMultipartUploadsQueryParams extends SpeakeasyBase {
    limit?: string;
    marker?: string;
}
export declare class ListMultipartUploadsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListMultipartUploadsRequest extends SpeakeasyBase {
    pathParams: ListMultipartUploadsPathParams;
    queryParams: ListMultipartUploadsQueryParams;
    headers: ListMultipartUploadsHeaders;
}
export declare class ListMultipartUploadsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listMultipartUploadsOutput?: shared.ListMultipartUploadsOutput;
    missingParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
