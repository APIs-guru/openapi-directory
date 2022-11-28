import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnValueEnum } from "./returnvalueenum";



export class PutItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Expected", elemType: ExpectedAttributeValue })
  expected?: Map<string, ExpectedAttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=Item", elemType: AttributeValue })
  item: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=ReturnValues" })
  returnValues?: ReturnValueEnum;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
