import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeRuntimeConfigurationInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeRuntimeConfigurationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;
}
