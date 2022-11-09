import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListProfileObjectTypeTemplateItem
/** 
 * A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates.
**/
export class ListProfileObjectTypeTemplateItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=SourceName" })
  sourceName?: string;

  @Metadata({ data: "json, name=SourceObject" })
  sourceObject?: string;

  @Metadata({ data: "json, name=TemplateId" })
  templateId?: string;
}
