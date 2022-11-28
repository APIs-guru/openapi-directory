import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListDeploymentsHistoryFilterEnum {
    All = "ALL",
    LatestOnly = "LATEST_ONLY"
}
export declare class ListDeploymentsQueryParams extends SpeakeasyBase {
    historyFilter?: ListDeploymentsHistoryFilterEnum;
    maxResults?: number;
    nextToken?: string;
    targetArn?: string;
}
export declare class ListDeploymentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDeploymentsRequest extends SpeakeasyBase {
    queryParams: ListDeploymentsQueryParams;
    headers: ListDeploymentsHeaders;
}
export declare class ListDeploymentsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listDeploymentsResponse?: shared.ListDeploymentsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
