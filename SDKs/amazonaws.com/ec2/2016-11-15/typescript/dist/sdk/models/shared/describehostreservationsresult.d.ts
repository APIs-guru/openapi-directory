import { SpeakeasyBase } from "../../../internal/utils";
import { HostReservation } from "./hostreservation";
export declare class DescribeHostReservationsResult extends SpeakeasyBase {
    hostReservationSet?: HostReservation[];
    nextToken?: string;
}
