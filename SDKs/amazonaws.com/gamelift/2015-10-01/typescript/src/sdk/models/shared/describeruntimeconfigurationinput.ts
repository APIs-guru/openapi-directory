import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeRuntimeConfigurationInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeRuntimeConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;
}
