import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetainedMessageSummary
/** 
 * Information about a single retained message.
**/
export class RetainedMessageSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: number;

  @SpeakeasyMetadata({ data: "json, name=payloadSize" })
  payloadSize?: number;

  @SpeakeasyMetadata({ data: "json, name=qos" })
  qos?: number;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
