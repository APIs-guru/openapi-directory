import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FleetUtilization } from "./fleetutilization";


// DescribeFleetUtilizationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetUtilizationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetUtilization", elemType: shared.FleetUtilization })
  fleetUtilization?: FleetUtilization[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
