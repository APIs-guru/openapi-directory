import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcPeeringAuthorization } from "./vpcpeeringauthorization";



// CreateVpcPeeringAuthorizationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateVpcPeeringAuthorizationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VpcPeeringAuthorization" })
  vpcPeeringAuthorization?: VpcPeeringAuthorization;
}
