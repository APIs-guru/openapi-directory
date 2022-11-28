import { SpeakeasyBase } from "../../../internal/utils";
import { JobData } from "./jobdata";
/**
 * Represents information about a job.
**/
export declare class Job extends SpeakeasyBase {
    accountId?: string;
    data?: JobData;
    id?: string;
    nonce?: string;
}
