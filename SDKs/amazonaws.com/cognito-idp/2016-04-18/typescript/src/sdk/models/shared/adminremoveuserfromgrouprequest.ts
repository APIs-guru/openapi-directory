import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AdminRemoveUserFromGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
