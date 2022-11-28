import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDimensionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDimensionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDimensionsRequest extends SpeakeasyBase {
    queryParams: ListDimensionsQueryParams;
    headers: ListDimensionsHeaders;
}
export declare class ListDimensionsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listDimensionsResponse?: shared.ListDimensionsResponse;
    statusCode: number;
    throttlingException?: any;
}
