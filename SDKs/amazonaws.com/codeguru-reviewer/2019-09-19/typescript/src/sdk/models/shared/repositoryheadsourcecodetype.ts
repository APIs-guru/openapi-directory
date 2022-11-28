import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepositoryHeadSourceCodeType
/** 
 *  A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType"> <code>SourceCodeType</code> </a> that specifies the tip of a branch in an associated repository. 
**/
export class RepositoryHeadSourceCodeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BranchName" })
  branchName: string;
}
