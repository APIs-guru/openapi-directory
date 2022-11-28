import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTeamMembersXAmzTargetEnum {
    CodeStar20170419ListTeamMembers = "CodeStar_20170419.ListTeamMembers"
}
export declare class ListTeamMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTeamMembersXAmzTargetEnum;
}
export declare class ListTeamMembersRequest extends SpeakeasyBase {
    headers: ListTeamMembersHeaders;
    request: shared.ListTeamMembersRequest;
}
export declare class ListTeamMembersResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listTeamMembersResult?: shared.ListTeamMembersResult;
    projectNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
