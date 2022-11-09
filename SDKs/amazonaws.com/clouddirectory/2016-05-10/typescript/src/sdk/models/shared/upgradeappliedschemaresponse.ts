import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpgradeAppliedSchemaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryArn" })
  directoryArn?: string;

  @Metadata({ data: "json, name=UpgradedSchemaArn" })
  upgradedSchemaArn?: string;
}
