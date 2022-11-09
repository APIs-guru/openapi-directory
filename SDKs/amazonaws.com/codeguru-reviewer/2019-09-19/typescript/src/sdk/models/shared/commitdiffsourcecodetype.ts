import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CommitDiffSourceCodeType
/** 
 *  A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType"> <code>SourceCodeType</code> </a> that specifies the commit diff for a pull request on an associated repository. The <code>SourceCommit</code> and <code>DestinationCommit</code> fields are required to do a pull request code review. 
**/
export class CommitDiffSourceCodeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationCommit" })
  destinationCommit?: string;

  @Metadata({ data: "json, name=MergeBaseCommit" })
  mergeBaseCommit?: string;

  @Metadata({ data: "json, name=SourceCommit" })
  sourceCommit?: string;
}
