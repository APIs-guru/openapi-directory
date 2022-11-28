import { SpeakeasyBase } from "../../../internal/utils";
import { Commit } from "./commit";
import { BatchGetCommitsError } from "./batchgetcommitserror";
export declare class BatchGetCommitsOutput extends SpeakeasyBase {
    commits?: Commit[];
    errors?: BatchGetCommitsError[];
}
