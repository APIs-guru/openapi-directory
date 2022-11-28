import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the version (or revision) of a source artifact that initiated a pipeline execution.
**/
export declare class SourceRevision extends SpeakeasyBase {
    actionName: string;
    revisionId?: string;
    revisionSummary?: string;
    revisionUrl?: string;
}
