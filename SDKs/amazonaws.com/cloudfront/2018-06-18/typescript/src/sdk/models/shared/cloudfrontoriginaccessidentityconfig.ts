import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudFrontOriginAccessIdentityConfig
/** 
 * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. 
**/
export class CloudFrontOriginAccessIdentityConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callerReference: string;

  @SpeakeasyMetadata()
  comment: string;
}
