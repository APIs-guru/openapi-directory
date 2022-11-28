import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRoleAliasesQueryParams extends SpeakeasyBase {
    isAscendingOrder?: boolean;
    marker?: string;
    pageSize?: number;
}
export declare class ListRoleAliasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRoleAliasesRequest extends SpeakeasyBase {
    queryParams: ListRoleAliasesQueryParams;
    headers: ListRoleAliasesHeaders;
}
export declare class ListRoleAliasesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listRoleAliasesResponse?: shared.ListRoleAliasesResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
