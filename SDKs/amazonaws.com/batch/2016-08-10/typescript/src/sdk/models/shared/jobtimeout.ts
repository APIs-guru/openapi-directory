import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobTimeout
/** 
 * An object representing a job timeout configuration.
**/
export class JobTimeout extends SpeakeasyBase {
  @Metadata({ data: "json, name=attemptDurationSeconds" })
  attemptDurationSeconds?: number;
}
