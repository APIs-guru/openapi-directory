import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDirectoryConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryName" })
  directoryName: string;
}
