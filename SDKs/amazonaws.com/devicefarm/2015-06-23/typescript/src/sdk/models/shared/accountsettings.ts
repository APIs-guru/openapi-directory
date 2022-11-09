import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrialMinutes } from "./trialminutes";


// AccountSettings
/** 
 * A container for account-level settings in AWS Device Farm.
**/
export class AccountSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsAccountNumber" })
  awsAccountNumber?: string;

  @Metadata({ data: "json, name=defaultJobTimeoutMinutes" })
  defaultJobTimeoutMinutes?: number;

  @Metadata({ data: "json, name=maxJobTimeoutMinutes" })
  maxJobTimeoutMinutes?: number;

  @Metadata({ data: "json, name=maxSlots" })
  maxSlots?: Map<string, number>;

  @Metadata({ data: "json, name=skipAppResign" })
  skipAppResign?: boolean;

  @Metadata({ data: "json, name=trialMinutes" })
  trialMinutes?: TrialMinutes;

  @Metadata({ data: "json, name=unmeteredDevices" })
  unmeteredDevices?: Map<string, number>;

  @Metadata({ data: "json, name=unmeteredRemoteAccessDevices" })
  unmeteredRemoteAccessDevices?: Map<string, number>;
}
