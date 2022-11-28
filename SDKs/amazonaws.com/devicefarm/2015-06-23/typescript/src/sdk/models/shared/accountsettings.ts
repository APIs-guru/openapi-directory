import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrialMinutes } from "./trialminutes";



// AccountSettings
/** 
 * A container for account-level settings in AWS Device Farm.
**/
export class AccountSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awsAccountNumber" })
  awsAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultJobTimeoutMinutes" })
  defaultJobTimeoutMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=maxJobTimeoutMinutes" })
  maxJobTimeoutMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=maxSlots" })
  maxSlots?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=skipAppResign" })
  skipAppResign?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trialMinutes" })
  trialMinutes?: TrialMinutes;

  @SpeakeasyMetadata({ data: "json, name=unmeteredDevices" })
  unmeteredDevices?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=unmeteredRemoteAccessDevices" })
  unmeteredRemoteAccessDevices?: Map<string, number>;
}
