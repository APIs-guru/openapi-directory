import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutPermissionActionGroupEnum {
    AgentPermissions = "agentPermissions"
}
export declare class PutPermissionPathParams extends SpeakeasyBase {
    actionGroup: PutPermissionActionGroupEnum;
    profilingGroupName: string;
}
export declare class PutPermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutPermissionRequestBody extends SpeakeasyBase {
    principals: string[];
    revisionId?: string;
}
export declare class PutPermissionRequest extends SpeakeasyBase {
    pathParams: PutPermissionPathParams;
    headers: PutPermissionHeaders;
    request: PutPermissionRequestBody;
}
export declare class PutPermissionResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    putPermissionResponse?: shared.PutPermissionResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
