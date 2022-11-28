import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginProtocolPolicyEnum } from "./originprotocolpolicyenum";
import { OriginSslProtocols } from "./originsslprotocols";



// CustomOriginConfig
/** 
 * A customer origin or an Amazon S3 bucket configured as a website endpoint.
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
