import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OriginShield
/** 
 * <p>CloudFront Origin Shield.</p> <p>Using Origin Shield can help reduce the load on your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
**/
export class OriginShield extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled: boolean;

  @SpeakeasyMetadata()
  originShieldRegion?: string;
}
