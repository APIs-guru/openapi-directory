import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedThroughput } from "./provisionedthroughput";



export class UpdateTableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughput" })
  provisionedThroughput: ProvisionedThroughput;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
