import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupName" })
  groupName: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
