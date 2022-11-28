import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectoryStateEnum } from "./directorystateenum";



// Directory
/** 
 * Directory structure that includes the directory name and directory ARN.
**/
export class Directory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DirectoryArn" })
  directoryArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: DirectoryStateEnum;
}
