import { SpeakeasyBase } from "../../../internal/utils";
import { TrialMinutes } from "./trialminutes";
/**
 * A container for account-level settings in AWS Device Farm.
**/
export declare class AccountSettings extends SpeakeasyBase {
    awsAccountNumber?: string;
    defaultJobTimeoutMinutes?: number;
    maxJobTimeoutMinutes?: number;
    maxSlots?: Map<string, number>;
    skipAppResign?: boolean;
    trialMinutes?: TrialMinutes;
    unmeteredDevices?: Map<string, number>;
    unmeteredRemoteAccessDevices?: Map<string, number>;
}
