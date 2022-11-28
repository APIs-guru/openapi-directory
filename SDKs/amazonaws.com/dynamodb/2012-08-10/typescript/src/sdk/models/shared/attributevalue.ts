import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributeValue
/** 
 * <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
**/
export class AttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=B" })
  b?: string;

  @SpeakeasyMetadata({ data: "json, name=BOOL" })
  bool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BS" })
  bs?: string[];

  @SpeakeasyMetadata({ data: "json, name=L", elemType: AttributeValue })
  l?: AttributeValue[];

  @SpeakeasyMetadata({ data: "json, name=M", elemType: AttributeValue })
  m?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=N" })
  n?: string;

  @SpeakeasyMetadata({ data: "json, name=NS" })
  ns?: string[];

  @SpeakeasyMetadata({ data: "json, name=NULL" })
  null?: boolean;

  @SpeakeasyMetadata({ data: "json, name=S" })
  s?: string;

  @SpeakeasyMetadata({ data: "json, name=SS" })
  ss?: string[];
}
