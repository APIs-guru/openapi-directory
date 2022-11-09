import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResolveAliasOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class ResolveAliasOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;
}
