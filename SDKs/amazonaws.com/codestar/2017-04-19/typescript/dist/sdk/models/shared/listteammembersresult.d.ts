import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TeamMember } from "./teammember";
export declare class ListTeamMembersResult extends SpeakeasyBase {
    nextToken?: string;
    teamMembers: TeamMember[];
}
