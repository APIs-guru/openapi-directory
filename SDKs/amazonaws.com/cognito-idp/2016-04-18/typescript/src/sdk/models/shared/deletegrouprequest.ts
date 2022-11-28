import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
