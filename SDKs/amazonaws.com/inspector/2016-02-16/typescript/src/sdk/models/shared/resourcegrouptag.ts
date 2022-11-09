import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceGroupTag
/** 
 * This data type is used as one of the elements of the <a>ResourceGroup</a> data type.
**/
export class ResourceGroupTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
