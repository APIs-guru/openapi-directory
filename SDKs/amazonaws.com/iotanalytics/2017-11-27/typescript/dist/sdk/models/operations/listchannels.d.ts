import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListChannelsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListChannelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListChannelsRequest extends SpeakeasyBase {
    queryParams: ListChannelsQueryParams;
    headers: ListChannelsHeaders;
}
export declare class ListChannelsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listChannelsResponse?: shared.ListChannelsResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
