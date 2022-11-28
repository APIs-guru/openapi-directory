import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TeamMember } from "./teammember";



export class ListTeamMembersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=teamMembers", elemType: TeamMember })
  teamMembers: TeamMember[];
}
