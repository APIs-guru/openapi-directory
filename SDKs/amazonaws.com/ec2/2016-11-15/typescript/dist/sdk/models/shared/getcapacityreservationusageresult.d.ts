import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceUsage } from "./instanceusage";
import { CapacityReservationStateEnum } from "./capacityreservationstateenum";
export declare class GetCapacityReservationUsageResult extends SpeakeasyBase {
    availableInstanceCount?: number;
    capacityReservationId?: string;
    instanceType?: string;
    instanceUsages?: InstanceUsage[];
    nextToken?: string;
    state?: CapacityReservationStateEnum;
    totalInstanceCount?: number;
}
