import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteThingGroupPathParams extends SpeakeasyBase {
    thingGroupName: string;
}
export declare class DeleteThingGroupQueryParams extends SpeakeasyBase {
    expectedVersion?: number;
}
export declare class DeleteThingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteThingGroupRequest extends SpeakeasyBase {
    pathParams: DeleteThingGroupPathParams;
    queryParams: DeleteThingGroupQueryParams;
    headers: DeleteThingGroupHeaders;
}
export declare class DeleteThingGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteThingGroupResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    statusCode: number;
    throttlingException?: any;
    versionConflictException?: any;
}
