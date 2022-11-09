import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListProfileObjectTypeTemplateItem } from "./listprofileobjecttypetemplateitem";


export class ListProfileObjectTypeTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.ListProfileObjectTypeTemplateItem })
  items?: ListProfileObjectTypeTemplateItem[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
