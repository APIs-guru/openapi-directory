import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDynamicThingGroupPathParams extends SpeakeasyBase {
    thingGroupName: string;
}
export declare class DeleteDynamicThingGroupQueryParams extends SpeakeasyBase {
    expectedVersion?: number;
}
export declare class DeleteDynamicThingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDynamicThingGroupRequest extends SpeakeasyBase {
    pathParams: DeleteDynamicThingGroupPathParams;
    queryParams: DeleteDynamicThingGroupQueryParams;
    headers: DeleteDynamicThingGroupHeaders;
}
export declare class DeleteDynamicThingGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteDynamicThingGroupResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
    versionConflictException?: any;
}
