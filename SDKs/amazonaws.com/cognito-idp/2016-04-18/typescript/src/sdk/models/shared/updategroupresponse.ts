import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupType } from "./grouptype";



export class UpdateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Group" })
  group?: GroupType;
}
