import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcPeeringAuthorization } from "./vpcpeeringauthorization";


// CreateVpcPeeringAuthorizationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateVpcPeeringAuthorizationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=VpcPeeringAuthorization" })
  vpcPeeringAuthorization?: VpcPeeringAuthorization;
}
