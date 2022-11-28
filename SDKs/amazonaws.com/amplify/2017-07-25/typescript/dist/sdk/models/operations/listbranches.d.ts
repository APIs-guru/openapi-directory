import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBranchesPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class ListBranchesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListBranchesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListBranchesRequest extends SpeakeasyBase {
    pathParams: ListBranchesPathParams;
    queryParams: ListBranchesQueryParams;
    headers: ListBranchesHeaders;
}
export declare class ListBranchesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    listBranchesResult?: shared.ListBranchesResult;
    statusCode: number;
    unauthorizedException?: any;
}
