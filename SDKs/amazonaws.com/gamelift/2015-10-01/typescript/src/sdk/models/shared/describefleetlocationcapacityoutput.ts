import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetCapacity } from "./fleetcapacity";


// DescribeFleetLocationCapacityOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetLocationCapacityOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetCapacity" })
  fleetCapacity?: FleetCapacity;
}
