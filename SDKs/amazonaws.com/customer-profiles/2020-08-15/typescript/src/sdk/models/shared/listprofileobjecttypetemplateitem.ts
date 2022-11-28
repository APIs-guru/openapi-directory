import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListProfileObjectTypeTemplateItem
/** 
 * A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates.
**/
export class ListProfileObjectTypeTemplateItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SourceName" })
  sourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceObject" })
  sourceObject?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateId" })
  templateId?: string;
}
