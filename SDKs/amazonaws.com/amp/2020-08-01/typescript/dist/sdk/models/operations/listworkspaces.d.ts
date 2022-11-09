import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListWorkspacesQueryParams extends SpeakeasyBase {
    alias?: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListWorkspacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListWorkspacesRequest extends SpeakeasyBase {
    queryParams: ListWorkspacesQueryParams;
    headers: ListWorkspacesHeaders;
}
export declare class ListWorkspacesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listWorkspacesResponse?: shared.ListWorkspacesResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
