import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsumedCapacity } from "./consumedcapacity";
import { AttributeValue } from "./attributevalue";


// GetItemOutput
/** 
 * Represents the output of a <code>GetItem</code> operation.
**/
export class GetItemOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedCapacity" })
  consumedCapacity?: ConsumedCapacity;

  @Metadata({ data: "json, name=Item", elemType: shared.AttributeValue })
  item?: Map<string, AttributeValue>;
}
