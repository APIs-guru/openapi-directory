import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PullRequestSourceReferenceUpdatedEventMetadata
/** 
 * Information about an update to the source branch of a pull request.
**/
export class PullRequestSourceReferenceUpdatedEventMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=afterCommitId" })
  afterCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=beforeCommitId" })
  beforeCommitId?: string;

  @SpeakeasyMetadata({ data: "json, name=mergeBase" })
  mergeBase?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
