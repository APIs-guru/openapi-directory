import { SpeakeasyBase } from "../../../internal/utils";
import { RevisionInfo } from "./revisioninfo";
/**
 * Represents the output of a <code>BatchGetApplicationRevisions</code> operation.
**/
export declare class BatchGetApplicationRevisionsOutput extends SpeakeasyBase {
    applicationName?: string;
    errorMessage?: string;
    revisions?: RevisionInfo[];
}
