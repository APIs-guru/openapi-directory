import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDirectoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppliedSchemaArn" })
  appliedSchemaArn: string;

  @Metadata({ data: "json, name=DirectoryArn" })
  directoryArn: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier: string;
}
