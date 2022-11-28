import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceHealthStatusEnum } from "./instancehealthstatusenum";
/**
 * Describes a running instance in a Spot Fleet.
**/
export declare class ActiveInstance extends SpeakeasyBase {
    instanceHealth?: InstanceHealthStatusEnum;
    instanceId?: string;
    instanceType?: string;
    spotInstanceRequestId?: string;
}
