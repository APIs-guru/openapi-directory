import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetInstanceAccessInput
/** 
 * Represents the input for a request operation.
**/
export class GetInstanceAccessInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
