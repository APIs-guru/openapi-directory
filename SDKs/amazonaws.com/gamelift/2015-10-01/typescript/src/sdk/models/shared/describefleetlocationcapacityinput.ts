import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeFleetLocationCapacityInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetLocationCapacityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location: string;
}
