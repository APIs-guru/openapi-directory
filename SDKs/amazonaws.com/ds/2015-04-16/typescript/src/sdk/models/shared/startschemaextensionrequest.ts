import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartSchemaExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateSnapshotBeforeSchemaExtension" })
  createSnapshotBeforeSchemaExtension: boolean;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=LdifContent" })
  ldifContent: string;
}
