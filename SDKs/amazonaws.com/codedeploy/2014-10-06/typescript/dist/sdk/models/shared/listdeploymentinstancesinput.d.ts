import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatusEnum } from "./instancestatusenum";
import { InstanceTypeEnum } from "./instancetypeenum";
/**
 *  Represents the input of a <code>ListDeploymentInstances</code> operation.
**/
export declare class ListDeploymentInstancesInput extends SpeakeasyBase {
    deploymentId: string;
    instanceStatusFilter?: InstanceStatusEnum[];
    instanceTypeFilter?: InstanceTypeEnum[];
    nextToken?: string;
}
