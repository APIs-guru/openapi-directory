import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservationGroup } from "./capacityreservationgroup";



export class GetGroupsForCapacityReservationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CapacityReservationGroup })
  capacityReservationGroups?: CapacityReservationGroup[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
