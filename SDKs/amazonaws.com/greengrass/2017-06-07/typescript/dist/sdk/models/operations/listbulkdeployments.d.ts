import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListBulkDeploymentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListBulkDeploymentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListBulkDeploymentsRequest extends SpeakeasyBase {
    queryParams: ListBulkDeploymentsQueryParams;
    headers: ListBulkDeploymentsHeaders;
}
export declare class ListBulkDeploymentsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listBulkDeploymentsResponse?: shared.ListBulkDeploymentsResponse;
    statusCode: number;
}
