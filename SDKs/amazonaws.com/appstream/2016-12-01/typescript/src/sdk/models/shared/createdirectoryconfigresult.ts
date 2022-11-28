import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectoryConfig } from "./directoryconfig";



export class CreateDirectoryConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryConfig" })
  directoryConfig?: DirectoryConfig;
}
