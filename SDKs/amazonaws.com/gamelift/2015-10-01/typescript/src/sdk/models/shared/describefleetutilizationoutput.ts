import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetUtilization } from "./fleetutilization";



// DescribeFleetUtilizationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetUtilizationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetUtilization", elemType: FleetUtilization })
  fleetUtilization?: FleetUtilization[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
