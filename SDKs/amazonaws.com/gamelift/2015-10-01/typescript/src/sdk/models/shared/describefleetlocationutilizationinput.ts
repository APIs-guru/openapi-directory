import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeFleetLocationUtilizationInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetLocationUtilizationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=Location" })
  location: string;
}
