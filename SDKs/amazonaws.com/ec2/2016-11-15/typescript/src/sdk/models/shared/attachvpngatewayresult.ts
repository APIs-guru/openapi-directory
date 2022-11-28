import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcAttachment } from "./vpcattachment";



// AttachVpnGatewayResult
/** 
 * Contains the output of AttachVpnGateway.
**/
export class AttachVpnGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpcAttachment?: VpcAttachment;
}
