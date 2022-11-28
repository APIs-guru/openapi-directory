import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisionedBandwidth
/** 
 * Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.
**/
export class ProvisionedBandwidth extends SpeakeasyBase {
  @SpeakeasyMetadata()
  provisionTime?: Date;

  @SpeakeasyMetadata()
  provisioned?: string;

  @SpeakeasyMetadata()
  requestTime?: Date;

  @SpeakeasyMetadata()
  requested?: string;

  @SpeakeasyMetadata()
  status?: string;
}
