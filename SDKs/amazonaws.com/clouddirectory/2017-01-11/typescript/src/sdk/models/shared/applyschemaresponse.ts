import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApplySchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppliedSchemaArn" })
  appliedSchemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryArn" })
  directoryArn?: string;
}
