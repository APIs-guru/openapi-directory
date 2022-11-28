import { SpeakeasyBase } from "../../../internal/utils";
import { RevisionLocation } from "./revisionlocation";
/**
 * Represents the output of a <code>ListApplicationRevisions</code> operation.
**/
export declare class ListApplicationRevisionsOutput extends SpeakeasyBase {
    nextToken?: string;
    revisions?: RevisionLocation[];
}
