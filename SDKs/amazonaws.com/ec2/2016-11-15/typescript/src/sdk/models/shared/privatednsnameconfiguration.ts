import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsNameStateEnum } from "./dnsnamestateenum";



// PrivateDnsNameConfiguration
/** 
 * Information about the private DNS name for the service endpoint. For more information about these parameters, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/ndpoint-services-dns-validation.html">VPC Endpoint Service Private DNS Name Verification</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
**/
export class PrivateDnsNameConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  state?: DnsNameStateEnum;

  @SpeakeasyMetadata()
  type?: string;

  @SpeakeasyMetadata()
  value?: string;
}
