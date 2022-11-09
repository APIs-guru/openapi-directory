import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PullRequestCreatedEventMetadata
/** 
 * Metadata about the pull request that is used when comparing the pull request source with its destination.
**/
export class PullRequestCreatedEventMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationCommitId" })
  destinationCommitId?: string;

  @Metadata({ data: "json, name=mergeBase" })
  mergeBase?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @Metadata({ data: "json, name=sourceCommitId" })
  sourceCommitId?: string;
}
