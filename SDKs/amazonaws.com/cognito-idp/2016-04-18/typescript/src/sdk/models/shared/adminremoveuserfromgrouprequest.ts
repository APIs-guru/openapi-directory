import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdminRemoveUserFromGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupName" })
  groupName: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
