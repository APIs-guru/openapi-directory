import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetainedMessageSummary
/** 
 * Information about a single retained message.
**/
export class RetainedMessageSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: number;

  @Metadata({ data: "json, name=payloadSize" })
  payloadSize?: number;

  @Metadata({ data: "json, name=qos" })
  qos?: number;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
