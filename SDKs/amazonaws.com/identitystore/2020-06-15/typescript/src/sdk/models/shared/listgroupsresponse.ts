import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Group } from "./group";


export class ListGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Groups", elemType: shared.Group })
  groups: Group[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
