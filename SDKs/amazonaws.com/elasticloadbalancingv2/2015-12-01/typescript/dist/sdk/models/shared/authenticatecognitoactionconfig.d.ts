import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticateCognitoActionConditionalBehaviorEnumEnum } from "./authenticatecognitoactionconditionalbehaviorenumenum";
/**
 * Request parameters to use when integrating with Amazon Cognito to authenticate users.
**/
export declare class AuthenticateCognitoActionConfig extends SpeakeasyBase {
    authenticationRequestExtraParams?: Map<string, string>;
    onUnauthenticatedRequest?: AuthenticateCognitoActionConditionalBehaviorEnumEnum;
    scope?: string;
    sessionCookieName?: string;
    sessionTimeout?: number;
    userPoolArn: string;
    userPoolClientId: string;
    userPoolDomain: string;
}
