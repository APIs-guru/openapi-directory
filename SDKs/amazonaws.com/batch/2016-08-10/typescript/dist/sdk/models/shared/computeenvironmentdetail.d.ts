import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeResource } from "./computeresource";
import { CeStateEnum } from "./cestateenum";
import { CeStatusEnum } from "./cestatusenum";
import { CeTypeEnum } from "./cetypeenum";
/**
 * An object representing an Batch compute environment.
**/
export declare class ComputeEnvironmentDetail extends SpeakeasyBase {
    computeEnvironmentArn: string;
    computeEnvironmentName: string;
    computeResources?: ComputeResource;
    ecsClusterArn: string;
    serviceRole?: string;
    state?: CeStateEnum;
    status?: CeStatusEnum;
    statusReason?: string;
    tags?: Map<string, string>;
    type?: CeTypeEnum;
}
