import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
import { TargetSelectionEnum } from "./targetselectionenum";
/**
 * The job summary.
**/
export declare class JobSummary extends SpeakeasyBase {
    completedAt?: Date;
    createdAt?: Date;
    jobArn?: string;
    jobId?: string;
    lastUpdatedAt?: Date;
    status?: JobStatusEnum;
    targetSelection?: TargetSelectionEnum;
    thingGroupId?: string;
}
