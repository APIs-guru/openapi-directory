import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpgradeAppliedSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryArn" })
  directoryArn?: string;

  @SpeakeasyMetadata({ data: "json, name=UpgradedSchemaArn" })
  upgradedSchemaArn?: string;
}
