import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListProfileObjectTypeItem } from "./listprofileobjecttypeitem";



export class ListProfileObjectTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: ListProfileObjectTypeItem })
  items?: ListProfileObjectTypeItem[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
