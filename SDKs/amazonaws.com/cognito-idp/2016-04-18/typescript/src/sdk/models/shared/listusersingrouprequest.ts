import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListUsersInGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
