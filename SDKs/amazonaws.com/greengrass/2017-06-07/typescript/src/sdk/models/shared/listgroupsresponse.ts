import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupInformation } from "./groupinformation";


export class ListGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Groups", elemType: shared.GroupInformation })
  groups?: GroupInformation[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
