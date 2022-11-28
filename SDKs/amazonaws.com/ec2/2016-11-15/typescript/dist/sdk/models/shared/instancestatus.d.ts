import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatusEvent } from "./instancestatusevent";
import { InstanceState } from "./instancestate";
import { InstanceStatusSummary } from "./instancestatussummary";
/**
 * Describes the status of an instance.
**/
export declare class InstanceStatus extends SpeakeasyBase {
    availabilityZone?: string;
    events?: InstanceStatusEvent[];
    instanceId?: string;
    instanceState?: InstanceState;
    instanceStatus?: InstanceStatusSummary;
    outpostArn?: string;
    systemStatus?: InstanceStatusSummary;
}
