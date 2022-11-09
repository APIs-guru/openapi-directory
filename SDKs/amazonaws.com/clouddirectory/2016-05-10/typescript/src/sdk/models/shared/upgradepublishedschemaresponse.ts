import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpgradePublishedSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UpgradedSchemaArn" })
  upgradedSchemaArn?: string;
}
