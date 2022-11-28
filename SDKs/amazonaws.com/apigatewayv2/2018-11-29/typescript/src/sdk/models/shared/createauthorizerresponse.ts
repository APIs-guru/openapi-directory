import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizerTypeEnum } from "./authorizertypeenum";
import { JwtConfiguration } from "./jwtconfiguration";



export class CreateAuthorizerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizerCredentialsArn" })
  authorizerCredentialsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AuthorizerId" })
  authorizerId?: string;

  @SpeakeasyMetadata({ data: "json, name=AuthorizerPayloadFormatVersion" })
  authorizerPayloadFormatVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=AuthorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=AuthorizerType" })
  authorizerType?: AuthorizerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=AuthorizerUri" })
  authorizerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=EnableSimpleResponses" })
  enableSimpleResponses?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IdentitySource" })
  identitySource?: string[];

  @SpeakeasyMetadata({ data: "json, name=IdentityValidationExpression" })
  identityValidationExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=JwtConfiguration" })
  jwtConfiguration?: JwtConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
