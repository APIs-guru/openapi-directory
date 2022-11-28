import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryHeadSourceCodeType } from "./repositoryheadsourcecodetype";
import { SourceCodeType } from "./sourcecodetype";
/**
 *  A code review type that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>.
**/
export declare class RepositoryAnalysis extends SpeakeasyBase {
    repositoryHead?: RepositoryHeadSourceCodeType;
    sourceCodeType?: SourceCodeType;
}
