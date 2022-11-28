import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListGameServerGroupsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum ListGameServerGroupsXAmzTargetEnum {
    GameLiftListGameServerGroups = "GameLift.ListGameServerGroups"
}
export declare class ListGameServerGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListGameServerGroupsXAmzTargetEnum;
}
export declare class ListGameServerGroupsRequest extends SpeakeasyBase {
    queryParams: ListGameServerGroupsQueryParams;
    headers: ListGameServerGroupsHeaders;
    request: shared.ListGameServerGroupsInput;
}
export declare class ListGameServerGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    listGameServerGroupsOutput?: shared.ListGameServerGroupsOutput;
    statusCode: number;
    unauthorizedException?: any;
}
