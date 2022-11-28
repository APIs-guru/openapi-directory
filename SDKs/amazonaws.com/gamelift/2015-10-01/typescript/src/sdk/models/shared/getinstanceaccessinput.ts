import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetInstanceAccessInput
/** 
 * Represents the input for a request operation.
**/
export class GetInstanceAccessInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
