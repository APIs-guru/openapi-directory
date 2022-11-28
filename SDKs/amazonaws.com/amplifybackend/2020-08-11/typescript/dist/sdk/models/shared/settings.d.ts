import { SpeakeasyBase } from "../../../internal/utils";
import { MfaTypesElementEnum } from "./mfatypeselementenum";
/**
 * The settings of your MFA configuration for the backend of your Amplify project.
**/
export declare class Settings extends SpeakeasyBase {
    mfaTypes?: MfaTypesElementEnum[];
    smsMessage?: string;
}
