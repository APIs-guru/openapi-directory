import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterCrossAccountAccessRoleXAmzTargetEnum {
    InspectorServiceRegisterCrossAccountAccessRole = "InspectorService.RegisterCrossAccountAccessRole"
}
export declare class RegisterCrossAccountAccessRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterCrossAccountAccessRoleXAmzTargetEnum;
}
export declare class RegisterCrossAccountAccessRoleRequest extends SpeakeasyBase {
    headers: RegisterCrossAccountAccessRoleHeaders;
    request: shared.RegisterCrossAccountAccessRoleRequest;
}
export declare class RegisterCrossAccountAccessRoleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidCrossAccountRoleException?: any;
    invalidInputException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
