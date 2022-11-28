import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssociateRoleToGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class AssociateRoleToGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateRoleToGroupRequestBody extends SpeakeasyBase {
    roleArn: string;
}
export declare class AssociateRoleToGroupRequest extends SpeakeasyBase {
    pathParams: AssociateRoleToGroupPathParams;
    headers: AssociateRoleToGroupHeaders;
    request: AssociateRoleToGroupRequestBody;
}
export declare class AssociateRoleToGroupResponse extends SpeakeasyBase {
    associateRoleToGroupResponse?: shared.AssociateRoleToGroupResponse;
    badRequestException?: any;
    contentType: string;
    internalServerErrorException?: any;
    statusCode: number;
}
