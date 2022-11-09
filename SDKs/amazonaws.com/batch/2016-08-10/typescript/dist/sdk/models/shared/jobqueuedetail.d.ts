import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComputeEnvironmentOrder } from "./computeenvironmentorder";
import { JqStateEnum } from "./jqstateenum";
import { JqStatusEnum } from "./jqstatusenum";
/**
 * An object representing the details of an Batch job queue.
**/
export declare class JobQueueDetail extends SpeakeasyBase {
    computeEnvironmentOrder: ComputeEnvironmentOrder[];
    jobQueueArn: string;
    jobQueueName: string;
    priority: number;
    state: JqStateEnum;
    status?: JqStatusEnum;
    statusReason?: string;
    tags?: Map<string, string>;
}
