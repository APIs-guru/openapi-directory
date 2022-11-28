import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CookieNames
/** 
 * A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.
**/
export class CookieNames extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;
}
