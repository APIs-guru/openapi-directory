import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTeamMemberXAmzTargetEnum {
    CodeStar20170419UpdateTeamMember = "CodeStar_20170419.UpdateTeamMember"
}
export declare class UpdateTeamMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTeamMemberXAmzTargetEnum;
}
export declare class UpdateTeamMemberRequest extends SpeakeasyBase {
    headers: UpdateTeamMemberHeaders;
    request: shared.UpdateTeamMemberRequest;
}
export declare class UpdateTeamMemberResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidServiceRoleException?: any;
    limitExceededException?: any;
    projectConfigurationException?: any;
    projectNotFoundException?: any;
    statusCode: number;
    teamMemberNotFoundException?: any;
    updateTeamMemberResult?: shared.UpdateTeamMemberResult;
    validationException?: any;
}
