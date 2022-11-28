import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ByoipCidrStateEnum } from "./byoipcidrstateenum";



// ByoipCidr
/** 
 * Information about an address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP).
**/
export class ByoipCidr extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidr?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  state?: ByoipCidrStateEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;
}
