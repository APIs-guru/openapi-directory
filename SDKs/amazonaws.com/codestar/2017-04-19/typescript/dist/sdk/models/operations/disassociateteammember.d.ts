import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateTeamMemberXAmzTargetEnum {
    CodeStar20170419DisassociateTeamMember = "CodeStar_20170419.DisassociateTeamMember"
}
export declare class DisassociateTeamMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateTeamMemberXAmzTargetEnum;
}
export declare class DisassociateTeamMemberRequest extends SpeakeasyBase {
    headers: DisassociateTeamMemberHeaders;
    request: shared.DisassociateTeamMemberRequest;
}
export declare class DisassociateTeamMemberResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    disassociateTeamMemberResult?: Map<string, any>;
    invalidServiceRoleException?: any;
    projectNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
