import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateTeamMemberRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectId" })
  projectId: string;

  @Metadata({ data: "json, name=userArn" })
  userArn: string;
}
