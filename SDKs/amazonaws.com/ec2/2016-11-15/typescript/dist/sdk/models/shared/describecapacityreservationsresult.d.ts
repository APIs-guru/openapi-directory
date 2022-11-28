import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservation } from "./capacityreservation";
export declare class DescribeCapacityReservationsResult extends SpeakeasyBase {
    capacityReservations?: CapacityReservation[];
    nextToken?: string;
}
