import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PullRequestCreatedEventMetadata
/** 
 * Metadata about the pull request that is used when comparing the pull request source with its destination.
**/
export class PullRequestCreatedEventMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationCommitId" })
  destinationCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=mergeBase" })
  mergeBase?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCommitId" })
  sourceCommitId?: string;
}
