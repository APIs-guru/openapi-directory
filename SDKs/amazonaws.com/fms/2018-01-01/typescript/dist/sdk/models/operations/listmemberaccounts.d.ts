import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMemberAccountsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListMemberAccountsXAmzTargetEnum {
    Awsfms20180101ListMemberAccounts = "AWSFMS_20180101.ListMemberAccounts"
}
export declare class ListMemberAccountsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMemberAccountsXAmzTargetEnum;
}
export declare class ListMemberAccountsRequest extends SpeakeasyBase {
    queryParams: ListMemberAccountsQueryParams;
    headers: ListMemberAccountsHeaders;
    request: shared.ListMemberAccountsRequest;
}
export declare class ListMemberAccountsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    listMemberAccountsResponse?: shared.ListMemberAccountsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
