import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetUtilization } from "./fleetutilization";


// DescribeFleetLocationUtilizationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetLocationUtilizationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetUtilization" })
  fleetUtilization?: FleetUtilization;
}
