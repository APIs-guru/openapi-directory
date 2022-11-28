import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceGroupTag
/** 
 * This data type is used as one of the elements of the <a>ResourceGroup</a> data type.
**/
export class ResourceGroupTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
