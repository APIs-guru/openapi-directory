import { SpeakeasyBase } from "../../../internal/utils";
import { SmsConfigurationType } from "./smsconfigurationtype";
/**
 * The SMS text message multi-factor authentication (MFA) configuration type.
**/
export declare class SmsMfaConfigType extends SpeakeasyBase {
    smsAuthenticationMessage?: string;
    smsConfiguration?: SmsConfigurationType;
}
