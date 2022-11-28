import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResolveAliasOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class ResolveAliasOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;
}
