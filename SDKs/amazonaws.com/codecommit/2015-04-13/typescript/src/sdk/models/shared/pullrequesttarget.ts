import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MergeMetadata } from "./mergemetadata";


// PullRequestTarget
/** 
 * Returns information about a pull request target.
**/
export class PullRequestTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationCommit" })
  destinationCommit?: string;

  @Metadata({ data: "json, name=destinationReference" })
  destinationReference?: string;

  @Metadata({ data: "json, name=mergeBase" })
  mergeBase?: string;

  @Metadata({ data: "json, name=mergeMetadata" })
  mergeMetadata?: MergeMetadata;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;

  @Metadata({ data: "json, name=sourceCommit" })
  sourceCommit?: string;

  @Metadata({ data: "json, name=sourceReference" })
  sourceReference?: string;
}
