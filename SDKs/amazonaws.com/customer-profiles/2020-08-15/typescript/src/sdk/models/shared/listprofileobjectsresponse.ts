import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListProfileObjectsItem } from "./listprofileobjectsitem";



export class ListProfileObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: ListProfileObjectsItem })
  items?: ListProfileObjectsItem[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
