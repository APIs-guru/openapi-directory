import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayPropertiesSummary } from "./arraypropertiessummary";
import { ContainerSummary } from "./containersummary";
import { NodePropertiesSummary } from "./nodepropertiessummary";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * An object representing summary details of a job.
**/
export declare class JobSummary extends SpeakeasyBase {
    arrayProperties?: ArrayPropertiesSummary;
    container?: ContainerSummary;
    createdAt?: number;
    jobArn?: string;
    jobDefinition?: string;
    jobId: string;
    jobName: string;
    nodeProperties?: NodePropertiesSummary;
    startedAt?: number;
    status?: JobStatusEnum;
    statusReason?: string;
    stoppedAt?: number;
}
