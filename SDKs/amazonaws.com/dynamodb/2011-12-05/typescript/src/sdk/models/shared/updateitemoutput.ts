import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



export class UpdateItemOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AttributeValue })
  attributes?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=ConsumedCapacityUnits" })
  consumedCapacityUnits?: number;
}
