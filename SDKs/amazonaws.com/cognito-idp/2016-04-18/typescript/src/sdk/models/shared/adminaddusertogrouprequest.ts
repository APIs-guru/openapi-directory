import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdminAddUserToGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupName" })
  groupName: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
