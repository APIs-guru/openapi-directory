import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectoryConfig } from "./directoryconfig";


export class CreateDirectoryConfigResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryConfig" })
  directoryConfig?: DirectoryConfig;
}
