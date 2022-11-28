import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginProtocolPolicyEnum } from "./originprotocolpolicyenum";
import { OriginSslProtocols } from "./originsslprotocols";



// CustomOriginConfig
/** 
 * A customer origin.
**/
export class CustomOriginConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  httpPort: number;

  @SpeakeasyMetadata()
  httpsPort: number;

  @SpeakeasyMetadata()
  originProtocolPolicy: OriginProtocolPolicyEnum;

  @SpeakeasyMetadata()
  originSslProtocols?: OriginSslProtocols;
}
