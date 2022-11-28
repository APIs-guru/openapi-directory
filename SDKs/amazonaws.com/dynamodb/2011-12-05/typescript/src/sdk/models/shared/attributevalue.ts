import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributeValue
/** 
 * AttributeValue can be <code>String</code>, <code>Number</code>, <code>Binary</code>, <code>StringSet</code>, <code>NumberSet</code>, <code>BinarySet</code>.
**/
export class AttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=B" })
  b?: string;

  @SpeakeasyMetadata({ data: "json, name=BS" })
  bs?: string[];

  @SpeakeasyMetadata({ data: "json, name=N" })
  n?: string;

  @SpeakeasyMetadata({ data: "json, name=NS" })
  ns?: string[];

  @SpeakeasyMetadata({ data: "json, name=S" })
  s?: string;

  @SpeakeasyMetadata({ data: "json, name=SS" })
  ss?: string[];
}
