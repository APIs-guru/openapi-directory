import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupType } from "./grouptype";



export class AdminListGroupsForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Groups", elemType: GroupType })
  groups?: GroupType[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
