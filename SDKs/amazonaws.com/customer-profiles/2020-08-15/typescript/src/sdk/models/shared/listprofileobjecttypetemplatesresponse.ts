import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListProfileObjectTypeTemplateItem } from "./listprofileobjecttypetemplateitem";



export class ListProfileObjectTypeTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: ListProfileObjectTypeTemplateItem })
  items?: ListProfileObjectTypeTemplateItem[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
