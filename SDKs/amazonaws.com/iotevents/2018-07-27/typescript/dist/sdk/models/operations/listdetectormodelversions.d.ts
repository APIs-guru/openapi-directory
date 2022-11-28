import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDetectorModelVersionsPathParams extends SpeakeasyBase {
    detectorModelName: string;
}
export declare class ListDetectorModelVersionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDetectorModelVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDetectorModelVersionsRequest extends SpeakeasyBase {
    pathParams: ListDetectorModelVersionsPathParams;
    queryParams: ListDetectorModelVersionsQueryParams;
    headers: ListDetectorModelVersionsHeaders;
}
export declare class ListDetectorModelVersionsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listDetectorModelVersionsResponse?: shared.ListDetectorModelVersionsResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
