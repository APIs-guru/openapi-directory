import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslProtocolEnum } from "./sslprotocolenum";



// OriginSslProtocols
/** 
 * A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin. 
**/
export class OriginSslProtocols extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items: SslProtocolEnum[];

  @SpeakeasyMetadata()
  quantity: number;
}
