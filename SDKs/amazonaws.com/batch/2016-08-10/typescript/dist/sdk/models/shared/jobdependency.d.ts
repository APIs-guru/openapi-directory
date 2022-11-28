import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayJobDependencyEnum } from "./arrayjobdependencyenum";
/**
 * An object representing an Batch job dependency.
**/
export declare class JobDependency extends SpeakeasyBase {
    jobId?: string;
    type?: ArrayJobDependencyEnum;
}
