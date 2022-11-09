import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListUsersInGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupName" })
  groupName: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
