import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateTeamMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "json, name=projectRole" })
  projectRole?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteAccessAllowed" })
  remoteAccessAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userArn" })
  userArn: string;
}
