import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectoryConfig } from "./directoryconfig";



export class UpdateDirectoryConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryConfig" })
  directoryConfig?: DirectoryConfig;
}
