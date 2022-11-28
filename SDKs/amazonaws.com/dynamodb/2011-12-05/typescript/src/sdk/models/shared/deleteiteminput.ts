import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { Key } from "./key";
import { ReturnValueEnum } from "./returnvalueenum";



export class DeleteItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Expected", elemType: ExpectedAttributeValue })
  expected?: Map<string, ExpectedAttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: Key;

  @SpeakeasyMetadata({ data: "json, name=ReturnValues" })
  returnValues?: ReturnValueEnum;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
