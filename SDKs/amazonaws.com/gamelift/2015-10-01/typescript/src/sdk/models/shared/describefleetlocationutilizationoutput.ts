import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetUtilization } from "./fleetutilization";



// DescribeFleetLocationUtilizationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetLocationUtilizationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetUtilization" })
  fleetUtilization?: FleetUtilization;
}
