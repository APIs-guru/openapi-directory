import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListInvitationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListInvitationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListInvitationsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListInvitationsRequest extends SpeakeasyBase {
    queryParams: ListInvitationsQueryParams;
    headers: ListInvitationsHeaders;
    request: ListInvitationsRequestBody;
}
export declare class ListInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listInvitationsResponse?: shared.ListInvitationsResponse;
    statusCode: number;
    validationException?: any;
}
