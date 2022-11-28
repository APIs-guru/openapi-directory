import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecutionConfiguration
/** 
 * Represents configuration information about a test run, such as the execution timeout (in minutes).
**/
export class ExecutionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountsCleanup" })
  accountsCleanup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=appPackagesCleanup" })
  appPackagesCleanup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jobTimeoutMinutes" })
  jobTimeoutMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=skipAppResign" })
  skipAppResign?: boolean;

  @SpeakeasyMetadata({ data: "json, name=videoCapture" })
  videoCapture?: boolean;
}
