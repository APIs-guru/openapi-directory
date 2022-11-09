import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectoryStateEnum } from "./directorystateenum";


// Directory
/** 
 * Directory structure that includes the directory name and directory ARN.
**/
export class Directory extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=DirectoryArn" })
  directoryArn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=State" })
  state?: DirectoryStateEnum;
}
