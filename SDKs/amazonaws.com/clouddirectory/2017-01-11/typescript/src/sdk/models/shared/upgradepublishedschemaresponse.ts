import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpgradePublishedSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UpgradedSchemaArn" })
  upgradedSchemaArn?: string;
}
