import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeFleetPortSettingsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetPortSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;
}
