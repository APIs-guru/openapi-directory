import { SpeakeasyBase } from "../../../internal/utils";
import { CurrentRevision } from "./currentrevision";
import { ExecutionDetails } from "./executiondetails";
/**
 * Represents the input of a <code>PutJobSuccessResult</code> action.
**/
export declare class PutJobSuccessResultInput extends SpeakeasyBase {
    continuationToken?: string;
    currentRevision?: CurrentRevision;
    executionDetails?: ExecutionDetails;
    jobId: string;
    outputVariables?: Map<string, string>;
}
