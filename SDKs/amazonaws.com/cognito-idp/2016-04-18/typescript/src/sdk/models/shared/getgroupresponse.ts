import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupType } from "./grouptype";



export class GetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Group" })
  group?: GroupType;
}
