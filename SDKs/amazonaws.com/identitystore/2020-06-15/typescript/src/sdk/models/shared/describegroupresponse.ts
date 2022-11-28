import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId: string;
}
