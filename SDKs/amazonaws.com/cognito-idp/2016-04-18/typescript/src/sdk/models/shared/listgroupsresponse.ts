import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupType } from "./grouptype";


export class ListGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Groups", elemType: shared.GroupType })
  groups?: GroupType[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
