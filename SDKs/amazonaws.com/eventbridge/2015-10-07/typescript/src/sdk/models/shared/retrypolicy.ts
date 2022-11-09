import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetryPolicy
/** 
 * A <code>RetryPolicy</code> object that includes information about the retry policy settings.
**/
export class RetryPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaximumEventAgeInSeconds" })
  maximumEventAgeInSeconds?: number;

  @Metadata({ data: "json, name=MaximumRetryAttempts" })
  maximumRetryAttempts?: number;
}
