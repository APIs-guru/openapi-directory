import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecutionConfiguration
/** 
 * Represents configuration information about a test run, such as the execution timeout (in minutes).
**/
export class ExecutionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountsCleanup" })
  accountsCleanup?: boolean;

  @Metadata({ data: "json, name=appPackagesCleanup" })
  appPackagesCleanup?: boolean;

  @Metadata({ data: "json, name=jobTimeoutMinutes" })
  jobTimeoutMinutes?: number;

  @Metadata({ data: "json, name=skipAppResign" })
  skipAppResign?: boolean;

  @Metadata({ data: "json, name=videoCapture" })
  videoCapture?: boolean;
}
