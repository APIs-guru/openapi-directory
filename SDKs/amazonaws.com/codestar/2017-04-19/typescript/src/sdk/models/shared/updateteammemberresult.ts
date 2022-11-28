import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateTeamMemberResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectRole" })
  projectRole?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteAccessAllowed" })
  remoteAccessAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn?: string;
}
