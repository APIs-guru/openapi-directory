import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CidrAuthorizationContext
/** 
 * <p>Provides authorization for Amazon to bring a specific IP address range to a specific AWS account using bring your own IP addresses (BYOIP). </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
**/
export class CidrAuthorizationContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message: string;

  @Metadata({ data: "json, name=Signature" })
  signature: string;
}
