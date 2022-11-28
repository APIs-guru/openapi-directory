import { SpeakeasyBase } from "../../../internal/utils";
import { Step } from "./step";
import { JobSummary } from "./jobsummary";
/**
 *  Describes an execution job for an Amplify app.
**/
export declare class Job extends SpeakeasyBase {
    steps: Step[];
    summary: JobSummary;
}
