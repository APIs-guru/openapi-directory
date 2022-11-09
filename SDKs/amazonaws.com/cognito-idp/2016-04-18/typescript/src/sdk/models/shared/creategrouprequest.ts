import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName: string;

  @Metadata({ data: "json, name=Precedence" })
  precedence?: number;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
