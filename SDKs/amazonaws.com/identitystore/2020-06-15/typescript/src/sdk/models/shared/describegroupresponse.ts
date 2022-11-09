import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayName" })
  displayName: string;

  @Metadata({ data: "json, name=GroupId" })
  groupId: string;
}
