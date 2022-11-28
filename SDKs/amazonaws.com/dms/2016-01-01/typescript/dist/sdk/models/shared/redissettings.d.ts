import { SpeakeasyBase } from "../../../internal/utils";
import { RedisAuthTypeValueEnum } from "./redisauthtypevalueenum";
import { SslSecurityProtocolValueEnum } from "./sslsecurityprotocolvalueenum";
/**
 * Provides information that defines a Redis target endpoint.
**/
export declare class RedisSettings extends SpeakeasyBase {
    authPassword?: string;
    authType?: RedisAuthTypeValueEnum;
    authUserName?: string;
    port: number;
    serverName: string;
    sslCaCertificateArn?: string;
    sslSecurityProtocol?: SslSecurityProtocolValueEnum;
}
