import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TeamMember } from "./teammember";


export class ListTeamMembersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=teamMembers", elemType: shared.TeamMember })
  teamMembers: TeamMember[];
}
