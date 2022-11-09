import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeFleetPortSettingsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetPortSettingsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;
}
