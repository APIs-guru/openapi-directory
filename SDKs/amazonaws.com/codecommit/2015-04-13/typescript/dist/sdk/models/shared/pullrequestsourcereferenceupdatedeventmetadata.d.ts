import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an update to the source branch of a pull request.
**/
export declare class PullRequestSourceReferenceUpdatedEventMetadata extends SpeakeasyBase {
    afterCommitId?: string;
    beforeCommitId?: string;
    mergeBase?: string;
    repositoryName?: string;
}
