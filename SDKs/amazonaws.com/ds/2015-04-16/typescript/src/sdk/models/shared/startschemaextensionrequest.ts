import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartSchemaExtensionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateSnapshotBeforeSchemaExtension" })
  createSnapshotBeforeSchemaExtension: boolean;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=LdifContent" })
  ldifContent: string;
}
