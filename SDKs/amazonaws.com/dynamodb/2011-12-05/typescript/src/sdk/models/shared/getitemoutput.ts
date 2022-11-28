import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



export class GetItemOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedCapacityUnits" })
  consumedCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=Item", elemType: AttributeValue })
  item?: Map<string, AttributeValue>;
}
