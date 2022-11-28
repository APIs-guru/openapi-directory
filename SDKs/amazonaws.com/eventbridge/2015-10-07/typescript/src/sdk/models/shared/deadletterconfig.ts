import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeadLetterConfig
/** 
 * A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration.
**/
export class DeadLetterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
