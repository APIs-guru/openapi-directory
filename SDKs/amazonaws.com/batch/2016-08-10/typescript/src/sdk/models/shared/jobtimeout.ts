import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobTimeout
/** 
 * An object representing a job timeout configuration.
**/
export class JobTimeout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attemptDurationSeconds" })
  attemptDurationSeconds?: number;
}
