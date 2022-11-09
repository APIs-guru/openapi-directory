import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TeamMember
/** 
 * Information about a team member in a project.
**/
export class TeamMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectRole" })
  projectRole: string;

  @Metadata({ data: "json, name=remoteAccessAllowed" })
  remoteAccessAllowed?: boolean;

  @Metadata({ data: "json, name=userArn" })
  userArn: string;
}
