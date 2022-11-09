import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateTeamMemberResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectRole" })
  projectRole?: string;

  @Metadata({ data: "json, name=remoteAccessAllowed" })
  remoteAccessAllowed?: boolean;

  @Metadata({ data: "json, name=userArn" })
  userArn?: string;
}
