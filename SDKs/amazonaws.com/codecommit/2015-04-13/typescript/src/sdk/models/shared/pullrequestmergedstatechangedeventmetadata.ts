import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MergeMetadata } from "./mergemetadata";


// PullRequestMergedStateChangedEventMetadata
/** 
 * Returns information about the change in the merge state for a pull request event. 
**/
export class PullRequestMergedStateChangedEventMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationReference" })
  destinationReference?: string;

  @Metadata({ data: "json, name=mergeMetadata" })
  mergeMetadata?: MergeMetadata;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
