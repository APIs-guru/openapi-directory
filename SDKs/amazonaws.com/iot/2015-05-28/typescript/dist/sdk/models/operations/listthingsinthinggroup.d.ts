import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListThingsInThingGroupPathParams extends SpeakeasyBase {
    thingGroupName: string;
}
export declare class ListThingsInThingGroupQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    recursive?: boolean;
}
export declare class ListThingsInThingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListThingsInThingGroupRequest extends SpeakeasyBase {
    pathParams: ListThingsInThingGroupPathParams;
    queryParams: ListThingsInThingGroupQueryParams;
    headers: ListThingsInThingGroupHeaders;
}
export declare class ListThingsInThingGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listThingsInThingGroupResponse?: shared.ListThingsInThingGroupResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
