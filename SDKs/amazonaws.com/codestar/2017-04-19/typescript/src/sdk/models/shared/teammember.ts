import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TeamMember
/** 
 * Information about a team member in a project.
**/
export class TeamMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectRole" })
  projectRole: string;

  @SpeakeasyMetadata({ data: "json, name=remoteAccessAllowed" })
  remoteAccessAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn: string;
}
