import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateTeamMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn: string;
}
