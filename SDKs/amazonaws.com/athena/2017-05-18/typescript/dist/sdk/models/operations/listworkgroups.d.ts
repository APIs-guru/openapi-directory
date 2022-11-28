import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorkGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListWorkGroupsXAmzTargetEnum {
    AmazonAthenaListWorkGroups = "AmazonAthena.ListWorkGroups"
}
export declare class ListWorkGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListWorkGroupsXAmzTargetEnum;
}
export declare class ListWorkGroupsRequest extends SpeakeasyBase {
    queryParams: ListWorkGroupsQueryParams;
    headers: ListWorkGroupsHeaders;
    request: shared.ListWorkGroupsInput;
}
export declare class ListWorkGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listWorkGroupsOutput?: shared.ListWorkGroupsOutput;
    statusCode: number;
}
