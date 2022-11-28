import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdminAddUserToGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
