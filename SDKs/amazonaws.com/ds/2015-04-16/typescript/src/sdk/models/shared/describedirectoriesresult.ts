import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DirectoryDescription } from "./directorydescription";


// DescribeDirectoriesResult
/** 
 * Contains the results of the <a>DescribeDirectories</a> operation.
**/
export class DescribeDirectoriesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryDescriptions", elemType: shared.DirectoryDescription })
  directoryDescriptions?: DirectoryDescription[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
