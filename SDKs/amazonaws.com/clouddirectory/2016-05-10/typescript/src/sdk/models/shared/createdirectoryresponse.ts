import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDirectoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppliedSchemaArn" })
  appliedSchemaArn: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryArn" })
  directoryArn: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier: string;
}
