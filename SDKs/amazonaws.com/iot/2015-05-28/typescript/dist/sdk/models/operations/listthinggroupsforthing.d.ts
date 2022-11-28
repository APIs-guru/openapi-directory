import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListThingGroupsForThingPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class ListThingGroupsForThingQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListThingGroupsForThingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListThingGroupsForThingRequest extends SpeakeasyBase {
    pathParams: ListThingGroupsForThingPathParams;
    queryParams: ListThingGroupsForThingQueryParams;
    headers: ListThingGroupsForThingHeaders;
}
export declare class ListThingGroupsForThingResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listThingGroupsForThingResponse?: shared.ListThingGroupsForThingResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
