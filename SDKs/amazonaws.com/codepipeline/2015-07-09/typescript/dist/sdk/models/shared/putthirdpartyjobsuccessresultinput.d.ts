import { SpeakeasyBase } from "../../../internal/utils";
import { CurrentRevision } from "./currentrevision";
import { ExecutionDetails } from "./executiondetails";
/**
 * Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action.
**/
export declare class PutThirdPartyJobSuccessResultInput extends SpeakeasyBase {
    clientToken: string;
    continuationToken?: string;
    currentRevision?: CurrentRevision;
    executionDetails?: ExecutionDetails;
    jobId: string;
}
