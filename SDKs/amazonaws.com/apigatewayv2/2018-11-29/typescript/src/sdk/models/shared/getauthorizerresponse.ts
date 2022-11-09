import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizerTypeEnum } from "./authorizertypeenum";
import { JwtConfiguration } from "./jwtconfiguration";


export class GetAuthorizerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizerCredentialsArn" })
  authorizerCredentialsArn?: string;

  @Metadata({ data: "json, name=AuthorizerId" })
  authorizerId?: string;

  @Metadata({ data: "json, name=AuthorizerPayloadFormatVersion" })
  authorizerPayloadFormatVersion?: string;

  @Metadata({ data: "json, name=AuthorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: number;

  @Metadata({ data: "json, name=AuthorizerType" })
  authorizerType?: AuthorizerTypeEnum;

  @Metadata({ data: "json, name=AuthorizerUri" })
  authorizerUri?: string;

  @Metadata({ data: "json, name=EnableSimpleResponses" })
  enableSimpleResponses?: boolean;

  @Metadata({ data: "json, name=IdentitySource" })
  identitySource?: string[];

  @Metadata({ data: "json, name=IdentityValidationExpression" })
  identityValidationExpression?: string;

  @Metadata({ data: "json, name=JwtConfiguration" })
  jwtConfiguration?: JwtConfiguration;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
