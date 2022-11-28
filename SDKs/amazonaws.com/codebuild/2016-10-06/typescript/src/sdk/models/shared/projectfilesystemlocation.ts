import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileSystemTypeEnum } from "./filesystemtypeenum";



// ProjectFileSystemLocation
/** 
 *  Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a> 
**/
export class ProjectFileSystemLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=mountOptions" })
  mountOptions?: string;

  @SpeakeasyMetadata({ data: "json, name=mountPoint" })
  mountPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FileSystemTypeEnum;
}
