import { SpeakeasyBase } from "../../../internal/utils";
import { OriginProtocolPolicyEnum } from "./originprotocolpolicyenum";
import { OriginSslProtocols } from "./originsslprotocols";
/**
 * A customer origin.
**/
export declare class CustomOriginConfig extends SpeakeasyBase {
    httpPort: number;
    httpsPort: number;
    originProtocolPolicy: OriginProtocolPolicyEnum;
    originSslProtocols?: OriginSslProtocols;
}
