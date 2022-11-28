import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpoint } from "./vpcendpoint";



// CreateVpcEndpointResult
/** 
 * Contains the output of CreateVpcEndpoint.
**/
export class CreateVpcEndpointResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  vpcEndpoint?: VpcEndpoint;
}
