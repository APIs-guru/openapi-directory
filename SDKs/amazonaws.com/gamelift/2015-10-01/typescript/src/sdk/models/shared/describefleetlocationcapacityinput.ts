import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeFleetLocationCapacityInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetLocationCapacityInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=Location" })
  location: string;
}
