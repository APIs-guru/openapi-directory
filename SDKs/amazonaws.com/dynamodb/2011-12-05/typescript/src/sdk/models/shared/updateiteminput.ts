import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValueUpdate } from "./attributevalueupdate";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { Key } from "./key";
import { ReturnValueEnum } from "./returnvalueenum";


export class UpdateItemInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeUpdates", elemType: shared.AttributeValueUpdate })
  attributeUpdates: Map<string, AttributeValueUpdate>;

  @Metadata({ data: "json, name=Expected", elemType: shared.ExpectedAttributeValue })
  expected?: Map<string, ExpectedAttributeValue>;

  @Metadata({ data: "json, name=Key" })
  key: Key;

  @Metadata({ data: "json, name=ReturnValues" })
  returnValues?: ReturnValueEnum;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
