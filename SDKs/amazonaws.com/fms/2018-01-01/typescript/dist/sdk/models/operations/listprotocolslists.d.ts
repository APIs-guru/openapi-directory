import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProtocolsListsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListProtocolsListsXAmzTargetEnum {
    Awsfms20180101ListProtocolsLists = "AWSFMS_20180101.ListProtocolsLists"
}
export declare class ListProtocolsListsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProtocolsListsXAmzTargetEnum;
}
export declare class ListProtocolsListsRequest extends SpeakeasyBase {
    queryParams: ListProtocolsListsQueryParams;
    headers: ListProtocolsListsHeaders;
    request: shared.ListProtocolsListsRequest;
}
export declare class ListProtocolsListsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidOperationException?: any;
    listProtocolsListsResponse?: shared.ListProtocolsListsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
