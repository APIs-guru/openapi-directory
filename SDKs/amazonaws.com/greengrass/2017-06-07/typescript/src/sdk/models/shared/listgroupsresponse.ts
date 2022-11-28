import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupInformation } from "./groupinformation";



export class ListGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Groups", elemType: GroupInformation })
  groups?: GroupInformation[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
