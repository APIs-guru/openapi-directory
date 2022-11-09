import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectoryDescription } from "./directorydescription";
/**
 * Contains the results of the <a>DescribeDirectories</a> operation.
**/
export declare class DescribeDirectoriesResult extends SpeakeasyBase {
    directoryDescriptions?: DirectoryDescription[];
    nextToken?: string;
}
