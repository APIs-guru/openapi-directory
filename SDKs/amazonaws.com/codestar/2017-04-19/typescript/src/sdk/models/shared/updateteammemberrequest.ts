import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateTeamMemberRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectId" })
  projectId: string;

  @Metadata({ data: "json, name=projectRole" })
  projectRole?: string;

  @Metadata({ data: "json, name=remoteAccessAllowed" })
  remoteAccessAllowed?: boolean;

  @Metadata({ data: "json, name=userArn" })
  userArn: string;
}
