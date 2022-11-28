import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservationGroup } from "./capacityreservationgroup";
export declare class GetGroupsForCapacityReservationResult extends SpeakeasyBase {
    capacityReservationGroups?: CapacityReservationGroup[];
    nextToken?: string;
}
