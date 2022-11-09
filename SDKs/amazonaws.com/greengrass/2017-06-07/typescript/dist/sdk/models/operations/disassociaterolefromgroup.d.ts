import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DisassociateRoleFromGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class DisassociateRoleFromGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateRoleFromGroupRequest extends SpeakeasyBase {
    pathParams: DisassociateRoleFromGroupPathParams;
    headers: DisassociateRoleFromGroupHeaders;
}
export declare class DisassociateRoleFromGroupResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    disassociateRoleFromGroupResponse?: shared.DisassociateRoleFromGroupResponse;
    internalServerErrorException?: any;
    statusCode: number;
}
