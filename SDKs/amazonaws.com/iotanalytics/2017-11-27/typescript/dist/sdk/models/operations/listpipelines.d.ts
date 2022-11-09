import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPipelinesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListPipelinesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPipelinesRequest extends SpeakeasyBase {
    queryParams: ListPipelinesQueryParams;
    headers: ListPipelinesHeaders;
}
export declare class ListPipelinesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listPipelinesResponse?: shared.ListPipelinesResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
