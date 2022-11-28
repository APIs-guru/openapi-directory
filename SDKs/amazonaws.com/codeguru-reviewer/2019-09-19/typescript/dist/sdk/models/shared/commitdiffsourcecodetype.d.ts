import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType"> <code>SourceCodeType</code> </a> that specifies the commit diff for a pull request on an associated repository. The <code>SourceCommit</code> and <code>DestinationCommit</code> fields are required to do a pull request code review.
**/
export declare class CommitDiffSourceCodeType extends SpeakeasyBase {
    destinationCommit?: string;
    mergeBaseCommit?: string;
    sourceCommit?: string;
}
