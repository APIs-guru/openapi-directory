import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MergeMetadata } from "./mergemetadata";



// PullRequestMergedStateChangedEventMetadata
/** 
 * Returns information about the change in the merge state for a pull request event. 
**/
export class PullRequestMergedStateChangedEventMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationReference" })
  destinationReference?: string;

  @SpeakeasyMetadata({ data: "json, name=mergeMetadata" })
  mergeMetadata?: MergeMetadata;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
