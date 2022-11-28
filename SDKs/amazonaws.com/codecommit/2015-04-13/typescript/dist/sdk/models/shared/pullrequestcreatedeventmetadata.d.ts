import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata about the pull request that is used when comparing the pull request source with its destination.
**/
export declare class PullRequestCreatedEventMetadata extends SpeakeasyBase {
    destinationCommitId?: string;
    mergeBase?: string;
    repositoryName?: string;
    sourceCommitId?: string;
}
