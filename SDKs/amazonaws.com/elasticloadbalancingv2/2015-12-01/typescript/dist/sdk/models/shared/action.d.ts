import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticateCognitoActionConfig } from "./authenticatecognitoactionconfig";
import { AuthenticateOidcActionConfig } from "./authenticateoidcactionconfig";
import { FixedResponseActionConfig } from "./fixedresponseactionconfig";
import { ForwardActionConfig } from "./forwardactionconfig";
import { RedirectActionConfig } from "./redirectactionconfig";
import { ActionTypeEnumEnum } from "./actiontypeenumenum";
/**
 * <p>Information about an action.</p> <p>Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>, and it must be the last action to be performed.</p>
**/
export declare class Action extends SpeakeasyBase {
    authenticateCognitoConfig?: AuthenticateCognitoActionConfig;
    authenticateOidcConfig?: AuthenticateOidcActionConfig;
    fixedResponseConfig?: FixedResponseActionConfig;
    forwardConfig?: ForwardActionConfig;
    order?: number;
    redirectConfig?: RedirectActionConfig;
    targetGroupArn?: string;
    type: ActionTypeEnumEnum;
}
