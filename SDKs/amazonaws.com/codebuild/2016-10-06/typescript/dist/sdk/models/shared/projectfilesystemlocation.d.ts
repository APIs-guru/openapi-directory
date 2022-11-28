import { SpeakeasyBase } from "../../../internal/utils";
import { FileSystemTypeEnum } from "./filesystemtypeenum";
/**
 *  Information about a file system created by Amazon Elastic File System (EFS). For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is Amazon Elastic File System?</a>
**/
export declare class ProjectFileSystemLocation extends SpeakeasyBase {
    identifier?: string;
    location?: string;
    mountOptions?: string;
    mountPoint?: string;
    type?: FileSystemTypeEnum;
}
