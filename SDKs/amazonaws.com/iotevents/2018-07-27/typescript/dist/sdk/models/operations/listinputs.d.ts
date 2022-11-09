import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListInputsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListInputsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListInputsRequest extends SpeakeasyBase {
    queryParams: ListInputsQueryParams;
    headers: ListInputsHeaders;
}
export declare class ListInputsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listInputsResponse?: shared.ListInputsResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
