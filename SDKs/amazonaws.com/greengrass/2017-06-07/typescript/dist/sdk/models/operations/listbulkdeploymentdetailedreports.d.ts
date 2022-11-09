import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListBulkDeploymentDetailedReportsPathParams extends SpeakeasyBase {
    bulkDeploymentId: string;
}
export declare class ListBulkDeploymentDetailedReportsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListBulkDeploymentDetailedReportsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListBulkDeploymentDetailedReportsRequest extends SpeakeasyBase {
    pathParams: ListBulkDeploymentDetailedReportsPathParams;
    queryParams: ListBulkDeploymentDetailedReportsQueryParams;
    headers: ListBulkDeploymentDetailedReportsHeaders;
}
export declare class ListBulkDeploymentDetailedReportsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listBulkDeploymentDetailedReportsResponse?: shared.ListBulkDeploymentDetailedReportsResponse;
    statusCode: number;
}
