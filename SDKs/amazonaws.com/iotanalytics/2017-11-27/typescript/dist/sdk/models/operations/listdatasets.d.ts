import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatasetsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDatasetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDatasetsRequest extends SpeakeasyBase {
    queryParams: ListDatasetsQueryParams;
    headers: ListDatasetsHeaders;
}
export declare class ListDatasetsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listDatasetsResponse?: shared.ListDatasetsResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
