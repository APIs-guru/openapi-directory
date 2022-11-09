import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FleetCapacity } from "./fleetcapacity";


// DescribeFleetCapacityOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetCapacityOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetCapacity", elemType: shared.FleetCapacity })
  fleetCapacity?: FleetCapacity[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
