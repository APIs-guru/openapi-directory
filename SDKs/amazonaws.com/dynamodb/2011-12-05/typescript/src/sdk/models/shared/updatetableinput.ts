import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedThroughput } from "./provisionedthroughput";


export class UpdateTableInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput: ProvisionedThroughput;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
