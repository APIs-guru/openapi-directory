import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStreamsQueryParams extends SpeakeasyBase {
    isAscendingOrder?: boolean;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStreamsRequest extends SpeakeasyBase {
    queryParams: ListStreamsQueryParams;
    headers: ListStreamsHeaders;
}
export declare class ListStreamsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listStreamsResponse?: shared.ListStreamsResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
