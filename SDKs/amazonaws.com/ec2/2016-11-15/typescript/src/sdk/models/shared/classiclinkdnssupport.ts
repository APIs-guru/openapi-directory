import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClassicLinkDnsSupport
/** 
 * Describes the ClassicLink DNS support status of a VPC.
**/
export class ClassicLinkDnsSupport extends SpeakeasyBase {
  @SpeakeasyMetadata()
  classicLinkDnsSupported?: boolean;

  @SpeakeasyMetadata()
  vpcId?: string;
}
