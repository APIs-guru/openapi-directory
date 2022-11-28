import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeFleetLocationUtilizationInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetLocationUtilizationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location: string;
}
