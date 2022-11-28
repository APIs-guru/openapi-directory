import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAuthorizersStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
export declare class ListAuthorizersQueryParams extends SpeakeasyBase {
    isAscendingOrder?: boolean;
    marker?: string;
    pageSize?: number;
    status?: ListAuthorizersStatusEnum;
}
export declare class ListAuthorizersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAuthorizersRequest extends SpeakeasyBase {
    queryParams: ListAuthorizersQueryParams;
    headers: ListAuthorizersHeaders;
}
export declare class ListAuthorizersResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAuthorizersResponse?: shared.ListAuthorizersResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
