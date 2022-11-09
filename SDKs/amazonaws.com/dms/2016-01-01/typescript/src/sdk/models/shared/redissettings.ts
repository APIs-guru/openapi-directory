import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RedisAuthTypeValueEnum } from "./redisauthtypevalueenum";
import { SslSecurityProtocolValueEnum } from "./sslsecurityprotocolvalueenum";


// RedisSettings
/** 
 * Provides information that defines a Redis target endpoint.
**/
export class RedisSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthPassword" })
  authPassword?: string;

  @Metadata({ data: "json, name=AuthType" })
  authType?: RedisAuthTypeValueEnum;

  @Metadata({ data: "json, name=AuthUserName" })
  authUserName?: string;

  @Metadata({ data: "json, name=Port" })
  port: number;

  @Metadata({ data: "json, name=ServerName" })
  serverName: string;

  @Metadata({ data: "json, name=SslCaCertificateArn" })
  sslCaCertificateArn?: string;

  @Metadata({ data: "json, name=SslSecurityProtocol" })
  sslSecurityProtocol?: SslSecurityProtocolValueEnum;
}
