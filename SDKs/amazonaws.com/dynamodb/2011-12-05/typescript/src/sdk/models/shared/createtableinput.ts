import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeySchema } from "./keyschema";
import { ProvisionedThroughput } from "./provisionedthroughput";


export class CreateTableInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeySchema" })
  keySchema: KeySchema;

  @Metadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput: ProvisionedThroughput;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
