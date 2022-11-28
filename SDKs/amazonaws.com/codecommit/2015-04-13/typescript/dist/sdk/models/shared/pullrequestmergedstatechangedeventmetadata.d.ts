import { SpeakeasyBase } from "../../../internal/utils";
import { MergeMetadata } from "./mergemetadata";
/**
 * Returns information about the change in the merge state for a pull request event.
**/
export declare class PullRequestMergedStateChangedEventMetadata extends SpeakeasyBase {
    destinationReference?: string;
    mergeMetadata?: MergeMetadata;
    repositoryName?: string;
}
