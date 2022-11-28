import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department. 
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
