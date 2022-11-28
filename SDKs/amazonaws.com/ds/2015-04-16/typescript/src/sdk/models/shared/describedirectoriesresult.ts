import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectoryDescription } from "./directorydescription";



// DescribeDirectoriesResult
/** 
 * Contains the results of the <a>DescribeDirectories</a> operation.
**/
export class DescribeDirectoriesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryDescriptions", elemType: DirectoryDescription })
  directoryDescriptions?: DirectoryDescription[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
