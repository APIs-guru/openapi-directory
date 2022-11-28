import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDetectorModelsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDetectorModelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDetectorModelsRequest extends SpeakeasyBase {
    queryParams: ListDetectorModelsQueryParams;
    headers: ListDetectorModelsHeaders;
}
export declare class ListDetectorModelsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listDetectorModelsResponse?: shared.ListDetectorModelsResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
