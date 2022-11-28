import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProfilingGroupPathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare class DeleteProfilingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteProfilingGroupRequest extends SpeakeasyBase {
    pathParams: DeleteProfilingGroupPathParams;
    headers: DeleteProfilingGroupHeaders;
}
export declare class DeleteProfilingGroupResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteProfilingGroupResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
