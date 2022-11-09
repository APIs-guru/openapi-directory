import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileSystemTypeEnum } from "./filesystemtypeenum";


// ProjectFileSystemLocation
/** 
 *  Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a> 
**/
export class ProjectFileSystemLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=mountOptions" })
  mountOptions?: string;

  @Metadata({ data: "json, name=mountPoint" })
  mountPoint?: string;

  @Metadata({ data: "json, name=type" })
  type?: FileSystemTypeEnum;
}
