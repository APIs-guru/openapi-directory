import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginProtocolPolicyEnum } from "./originprotocolpolicyenum";
import { OriginSslProtocols } from "./originsslprotocols";



// CustomOriginConfig
/** 
 * A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin.
**/
export class CustomOriginConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  httpPort: number;

  @SpeakeasyMetadata()
  httpsPort: number;

  @SpeakeasyMetadata()
  originKeepaliveTimeout?: number;

  @SpeakeasyMetadata()
  originProtocolPolicy: OriginProtocolPolicyEnum;

  @SpeakeasyMetadata()
  originReadTimeout?: number;

  @SpeakeasyMetadata()
  originSslProtocols?: OriginSslProtocols;
}
