import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListProfileObjectsItem } from "./listprofileobjectsitem";


export class ListProfileObjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.ListProfileObjectsItem })
  items?: ListProfileObjectsItem[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
