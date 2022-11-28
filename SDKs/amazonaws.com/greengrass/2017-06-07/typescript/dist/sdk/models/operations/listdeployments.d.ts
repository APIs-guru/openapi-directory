import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDeploymentsPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class ListDeploymentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
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
    pathParams: ListDeploymentsPathParams;
    queryParams: ListDeploymentsQueryParams;
    headers: ListDeploymentsHeaders;
}
export declare class ListDeploymentsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listDeploymentsResponse?: shared.ListDeploymentsResponse;
    statusCode: number;
}
