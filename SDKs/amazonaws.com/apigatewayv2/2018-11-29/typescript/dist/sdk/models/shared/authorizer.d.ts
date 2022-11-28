import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizerTypeEnum } from "./authorizertypeenum";
import { JwtConfiguration } from "./jwtconfiguration";
/**
 * Represents an authorizer.
**/
export declare class Authorizer extends SpeakeasyBase {
    authorizerCredentialsArn?: string;
    authorizerId?: string;
    authorizerPayloadFormatVersion?: string;
    authorizerResultTtlInSeconds?: number;
    authorizerType?: AuthorizerTypeEnum;
    authorizerUri?: string;
    enableSimpleResponses?: boolean;
    identitySource?: string[];
    identityValidationExpression?: string;
    jwtConfiguration?: JwtConfiguration;
    name: string;
}
