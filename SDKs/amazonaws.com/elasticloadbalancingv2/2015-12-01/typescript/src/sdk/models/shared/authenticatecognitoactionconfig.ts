import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticateCognitoActionConditionalBehaviorEnumEnum } from "./authenticatecognitoactionconditionalbehaviorenumenum";



// AuthenticateCognitoActionConfig
/** 
 * Request parameters to use when integrating with Amazon Cognito to authenticate users.
**/
export class AuthenticateCognitoActionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authenticationRequestExtraParams?: Map<string, string>;

  @SpeakeasyMetadata()
  onUnauthenticatedRequest?: AuthenticateCognitoActionConditionalBehaviorEnumEnum;

  @SpeakeasyMetadata()
  scope?: string;

  @SpeakeasyMetadata()
  sessionCookieName?: string;

  @SpeakeasyMetadata()
  sessionTimeout?: number;

  @SpeakeasyMetadata()
  userPoolArn: string;

  @SpeakeasyMetadata()
  userPoolClientId: string;

  @SpeakeasyMetadata()
  userPoolDomain: string;
}
