import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupType } from "./grouptype";


export class UpdateGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Group" })
  group?: GroupType;
}
