import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnValueEnum } from "./returnvalueenum";


export class PutItemInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Expected", elemType: shared.ExpectedAttributeValue })
  expected?: Map<string, ExpectedAttributeValue>;

  @Metadata({ data: "json, name=Item", elemType: shared.AttributeValue })
  item: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=ReturnValues" })
  returnValues?: ReturnValueEnum;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
