import { SpeakeasyBase } from "../../../internal/utils";
import { RevisionLocation } from "./revisionlocation";
/**
 * Represents the input of a <code>BatchGetApplicationRevisions</code> operation.
**/
export declare class BatchGetApplicationRevisionsInput extends SpeakeasyBase {
    applicationName: string;
    revisions: RevisionLocation[];
}
