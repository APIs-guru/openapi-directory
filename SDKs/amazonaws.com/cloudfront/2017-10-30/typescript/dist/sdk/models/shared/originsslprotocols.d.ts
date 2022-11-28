import { SpeakeasyBase } from "../../../internal/utils";
import { SslProtocolEnum } from "./sslprotocolenum";
/**
 * A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.
**/
export declare class OriginSslProtocols extends SpeakeasyBase {
    items: SslProtocolEnum[];
    quantity: number;
}
