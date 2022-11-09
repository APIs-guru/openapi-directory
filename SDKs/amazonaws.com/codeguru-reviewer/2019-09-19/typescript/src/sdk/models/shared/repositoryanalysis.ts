import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepositoryHeadSourceCodeType } from "./repositoryheadsourcecodetype";
import { SourceCodeType } from "./sourcecodetype";


// RepositoryAnalysis
/** 
 *  A code review type that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>. 
**/
export class RepositoryAnalysis extends SpeakeasyBase {
  @Metadata({ data: "json, name=RepositoryHead" })
  repositoryHead?: RepositoryHeadSourceCodeType;

  @Metadata({ data: "json, name=SourceCodeType" })
  sourceCodeType?: SourceCodeType;
}
