import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttributeValue
/** 
 * AttributeValue can be <code>String</code>, <code>Number</code>, <code>Binary</code>, <code>StringSet</code>, <code>NumberSet</code>, <code>BinarySet</code>.
**/
export class AttributeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=B" })
  b?: string;

  @Metadata({ data: "json, name=BS" })
  bs?: string[];

  @Metadata({ data: "json, name=N" })
  n?: string;

  @Metadata({ data: "json, name=NS" })
  ns?: string[];

  @Metadata({ data: "json, name=S" })
  s?: string;

  @Metadata({ data: "json, name=SS" })
  ss?: string[];
}
