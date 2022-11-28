import { SpeakeasyBase } from "../../../internal/utils";
import { AbortConfig } from "./abortconfig";
import { JobExecutionsRolloutConfig } from "./jobexecutionsrolloutconfig";
import { JobProcessDetails } from "./jobprocessdetails";
import { PresignedUrlConfig } from "./presignedurlconfig";
import { JobStatusEnum } from "./jobstatusenum";
import { TargetSelectionEnum } from "./targetselectionenum";
import { TimeoutConfig } from "./timeoutconfig";
/**
 * The <code>Job</code> object contains details about a job.
**/
export declare class Job extends SpeakeasyBase {
    abortConfig?: AbortConfig;
    comment?: string;
    completedAt?: Date;
    createdAt?: Date;
    description?: string;
    forceCanceled?: boolean;
    jobArn?: string;
    jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
    jobId?: string;
    jobProcessDetails?: JobProcessDetails;
    jobTemplateArn?: string;
    lastUpdatedAt?: Date;
    namespaceId?: string;
    presignedUrlConfig?: PresignedUrlConfig;
    reasonCode?: string;
    status?: JobStatusEnum;
    targetSelection?: TargetSelectionEnum;
    targets?: string[];
    timeoutConfig?: TimeoutConfig;
}
