import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDirectoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryArn" })
  directoryArn: string;
}
