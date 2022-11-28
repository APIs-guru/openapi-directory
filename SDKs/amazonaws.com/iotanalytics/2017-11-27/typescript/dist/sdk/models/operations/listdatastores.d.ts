import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatastoresQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDatastoresHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDatastoresRequest extends SpeakeasyBase {
    queryParams: ListDatastoresQueryParams;
    headers: ListDatastoresHeaders;
}
export declare class ListDatastoresResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listDatastoresResponse?: shared.ListDatastoresResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
