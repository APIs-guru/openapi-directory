import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeFleetCapacityInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetCapacityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetIds" })
  fleetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
