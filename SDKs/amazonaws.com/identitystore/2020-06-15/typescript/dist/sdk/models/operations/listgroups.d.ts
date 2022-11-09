import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListGroupsXAmzTargetEnum {
    AwsIdentityStoreListGroups = "AWSIdentityStore.ListGroups"
}
export declare class ListGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListGroupsXAmzTargetEnum;
}
export declare class ListGroupsRequest extends SpeakeasyBase {
    queryParams: ListGroupsQueryParams;
    headers: ListGroupsHeaders;
    request: shared.ListGroupsRequest;
}
export declare class ListGroupsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listGroupsResponse?: shared.ListGroupsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
