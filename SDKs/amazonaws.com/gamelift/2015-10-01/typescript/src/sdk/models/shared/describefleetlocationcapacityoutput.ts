import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetCapacity } from "./fleetcapacity";



// DescribeFleetLocationCapacityOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetLocationCapacityOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetCapacity" })
  fleetCapacity?: FleetCapacity;
}
