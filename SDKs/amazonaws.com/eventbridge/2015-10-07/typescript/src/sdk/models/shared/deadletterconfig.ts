import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeadLetterConfig
/** 
 * A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration.
**/
export class DeadLetterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;
}
