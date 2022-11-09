import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { Key } from "./key";
import { ReturnValueEnum } from "./returnvalueenum";


export class DeleteItemInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Expected", elemType: shared.ExpectedAttributeValue })
  expected?: Map<string, ExpectedAttributeValue>;

  @Metadata({ data: "json, name=Key" })
  key: Key;

  @Metadata({ data: "json, name=ReturnValues" })
  returnValues?: ReturnValueEnum;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
