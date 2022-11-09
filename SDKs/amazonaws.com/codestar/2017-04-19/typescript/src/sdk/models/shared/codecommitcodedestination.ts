import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CodeCommitCodeDestination
/** 
 * Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.
**/
export class CodeCommitCodeDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
