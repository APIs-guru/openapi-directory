import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisableDirectoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryArn" })
  directoryArn: string;
}
