import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetCapacity } from "./fleetcapacity";



// DescribeFleetCapacityOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetCapacityOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetCapacity", elemType: FleetCapacity })
  fleetCapacity?: FleetCapacity[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
