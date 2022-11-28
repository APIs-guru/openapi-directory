import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAppsListsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAppsListsXAmzTargetEnum {
    Awsfms20180101ListAppsLists = "AWSFMS_20180101.ListAppsLists"
}
export declare class ListAppsListsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAppsListsXAmzTargetEnum;
}
export declare class ListAppsListsRequest extends SpeakeasyBase {
    queryParams: ListAppsListsQueryParams;
    headers: ListAppsListsHeaders;
    request: shared.ListAppsListsRequest;
}
export declare class ListAppsListsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidOperationException?: any;
    limitExceededException?: any;
    listAppsListsResponse?: shared.ListAppsListsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
