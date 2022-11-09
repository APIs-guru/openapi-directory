import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about a team member in a project.
**/
export declare class TeamMember extends SpeakeasyBase {
    projectRole: string;
    remoteAccessAllowed?: boolean;
    userArn: string;
}
