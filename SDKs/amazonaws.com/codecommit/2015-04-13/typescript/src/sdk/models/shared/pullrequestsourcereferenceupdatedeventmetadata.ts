import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PullRequestSourceReferenceUpdatedEventMetadata
/** 
 * Information about an update to the source branch of a pull request.
**/
export class PullRequestSourceReferenceUpdatedEventMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=afterCommitId" })
  afterCommitId?: string;

  @Metadata({ data: "json, name=beforeCommitId" })
  beforeCommitId?: string;

  @Metadata({ data: "json, name=mergeBase" })
  mergeBase?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
