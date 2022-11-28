import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMembersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListMembersRequestBody extends SpeakeasyBase {
    graphArn: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListMembersRequest extends SpeakeasyBase {
    queryParams: ListMembersQueryParams;
    headers: ListMembersHeaders;
    request: ListMembersRequestBody;
}
export declare class ListMembersResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listMembersResponse?: shared.ListMembersResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
