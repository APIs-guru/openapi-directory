import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RedisAuthTypeValueEnum } from "./redisauthtypevalueenum";
import { SslSecurityProtocolValueEnum } from "./sslsecurityprotocolvalueenum";



// RedisSettings
/** 
 * Provides information that defines a Redis target endpoint.
**/
export class RedisSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthPassword" })
  authPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=AuthType" })
  authType?: RedisAuthTypeValueEnum;

  @SpeakeasyMetadata({ data: "json, name=AuthUserName" })
  authUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName: string;

  @SpeakeasyMetadata({ data: "json, name=SslCaCertificateArn" })
  sslCaCertificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SslSecurityProtocol" })
  sslSecurityProtocol?: SslSecurityProtocolValueEnum;
}
