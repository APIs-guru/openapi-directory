import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses support tagging.
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
