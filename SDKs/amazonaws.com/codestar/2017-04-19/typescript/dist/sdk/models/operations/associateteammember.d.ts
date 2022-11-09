import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AssociateTeamMemberXAmzTargetEnum {
    CodeStar20170419AssociateTeamMember = "CodeStar_20170419.AssociateTeamMember"
}
export declare class AssociateTeamMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateTeamMemberXAmzTargetEnum;
}
export declare class AssociateTeamMemberRequest extends SpeakeasyBase {
    headers: AssociateTeamMemberHeaders;
    request: shared.AssociateTeamMemberRequest;
}
export declare class AssociateTeamMemberResponse extends SpeakeasyBase {
    associateTeamMemberResult?: shared.AssociateTeamMemberResult;
    concurrentModificationException?: any;
    contentType: string;
    invalidServiceRoleException?: any;
    limitExceededException?: any;
    projectConfigurationException?: any;
    projectNotFoundException?: any;
    statusCode: number;
    teamMemberAlreadyAssociatedException?: any;
    validationException?: any;
}
