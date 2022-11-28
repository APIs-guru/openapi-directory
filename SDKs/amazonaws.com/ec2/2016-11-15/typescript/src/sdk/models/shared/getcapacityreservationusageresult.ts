import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceUsage } from "./instanceusage";
import { CapacityReservationStateEnum } from "./capacityreservationstateenum";



export class GetCapacityReservationUsageResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availableInstanceCount?: number;

  @SpeakeasyMetadata()
  capacityReservationId?: string;

  @SpeakeasyMetadata()
  instanceType?: string;

  @SpeakeasyMetadata({ elemType: InstanceUsage })
  instanceUsages?: InstanceUsage[];

  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata()
  state?: CapacityReservationStateEnum;

  @SpeakeasyMetadata()
  totalInstanceCount?: number;
}
