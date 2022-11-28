import { SpeakeasyBase } from "../../../internal/utils";
import { MergeMetadata } from "./mergemetadata";
/**
 * Returns information about a pull request target.
**/
export declare class PullRequestTarget extends SpeakeasyBase {
    destinationCommit?: string;
    destinationReference?: string;
    mergeBase?: string;
    mergeMetadata?: MergeMetadata;
    repositoryName?: string;
    sourceCommit?: string;
    sourceReference?: string;
}
