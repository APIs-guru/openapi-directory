import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcPeeringConnectionStateReasonCodeEnum } from "./vpcpeeringconnectionstatereasoncodeenum";



// VpcPeeringConnectionStateReason
/** 
 * Describes the status of a VPC peering connection.
**/
export class VpcPeeringConnectionStateReason extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: VpcPeeringConnectionStateReasonCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}
