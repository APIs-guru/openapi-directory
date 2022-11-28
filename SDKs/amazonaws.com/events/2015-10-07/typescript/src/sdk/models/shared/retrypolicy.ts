import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetryPolicy
/** 
 * A <code>RetryPolicy</code> object that includes information about the retry policy settings.
**/
export class RetryPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaximumEventAgeInSeconds" })
  maximumEventAgeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumRetryAttempts" })
  maximumRetryAttempts?: number;
}
