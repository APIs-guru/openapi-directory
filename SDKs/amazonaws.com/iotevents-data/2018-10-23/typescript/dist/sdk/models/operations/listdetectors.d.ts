import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDetectorsPathParams extends SpeakeasyBase {
    detectorModelName: string;
}
export declare class ListDetectorsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    stateName?: string;
}
export declare class ListDetectorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDetectorsRequest extends SpeakeasyBase {
    pathParams: ListDetectorsPathParams;
    queryParams: ListDetectorsQueryParams;
    headers: ListDetectorsHeaders;
}
export declare class ListDetectorsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listDetectorsResponse?: shared.ListDetectorsResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
