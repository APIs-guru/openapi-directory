import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MergeMetadata } from "./mergemetadata";



// PullRequestTarget
/** 
 * Returns information about a pull request target.
**/
export class PullRequestTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationCommit" })
  destinationCommit?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationReference" })
  destinationReference?: string;

  @SpeakeasyMetadata({ data: "json, name=mergeBase" })
  mergeBase?: string;

  @SpeakeasyMetadata({ data: "json, name=mergeMetadata" })
  mergeMetadata?: MergeMetadata;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceCommit" })
  sourceCommit?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceReference" })
  sourceReference?: string;
}
