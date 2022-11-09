import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListProfileObjectTypeItem } from "./listprofileobjecttypeitem";


export class ListProfileObjectTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.ListProfileObjectTypeItem })
  items?: ListProfileObjectTypeItem[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
