import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOverrides } from "./configurationoverrides";
import { FailureReasonEnum } from "./failurereasonenum";
import { JobDriver } from "./jobdriver";
import { JobRunStateEnum } from "./jobrunstateenum";
/**
 * This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
**/
export declare class JobRun extends SpeakeasyBase {
    arn?: string;
    clientToken?: string;
    configurationOverrides?: ConfigurationOverrides;
    createdAt?: Date;
    createdBy?: string;
    executionRoleArn?: string;
    failureReason?: FailureReasonEnum;
    finishedAt?: Date;
    id?: string;
    jobDriver?: JobDriver;
    name?: string;
    releaseLabel?: string;
    state?: JobRunStateEnum;
    stateDetails?: string;
    tags?: Map<string, string>;
    virtualClusterId?: string;
}
