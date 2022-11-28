import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { AttributeValue } from "./attributevalue";



// GetItemOutput
/** 
 * Represents the output of a <code>GetItem</code> operation.
**/
export class GetItemOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedCapacity" })
  consumedCapacity?: ConsumedCapacity;

  @SpeakeasyMetadata({ data: "json, name=Item", elemType: AttributeValue })
  item?: Map<string, AttributeValue>;
}
