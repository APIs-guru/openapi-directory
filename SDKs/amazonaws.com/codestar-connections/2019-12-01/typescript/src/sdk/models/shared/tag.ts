import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * <p>A tag is a key-value pair that is used to manage the resource.</p> <p>This tag is available for use by AWS services that support tags.</p>
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
