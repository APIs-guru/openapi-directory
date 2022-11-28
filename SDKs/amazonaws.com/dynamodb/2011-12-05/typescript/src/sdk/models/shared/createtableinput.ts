import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeySchema } from "./keyschema";
import { ProvisionedThroughput } from "./provisionedthroughput";



export class CreateTableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeySchema" })
  keySchema: KeySchema;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput: ProvisionedThroughput;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
