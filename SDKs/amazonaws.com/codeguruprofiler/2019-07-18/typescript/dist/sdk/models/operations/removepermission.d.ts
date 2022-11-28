import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemovePermissionActionGroupEnum {
    AgentPermissions = "agentPermissions"
}
export declare class RemovePermissionPathParams extends SpeakeasyBase {
    actionGroup: RemovePermissionActionGroupEnum;
    profilingGroupName: string;
}
export declare class RemovePermissionQueryParams extends SpeakeasyBase {
    revisionId: string;
}
export declare class RemovePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemovePermissionRequest extends SpeakeasyBase {
    pathParams: RemovePermissionPathParams;
    queryParams: RemovePermissionQueryParams;
    headers: RemovePermissionHeaders;
}
export declare class RemovePermissionResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    removePermissionResponse?: shared.RemovePermissionResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
