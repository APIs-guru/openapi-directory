import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ByoipCidrEvent
/** 
 * A complex type that contains a <code>Message</code> and a <code>Timestamp</code> value for changes that you make in the status an IP address range that you bring to AWS Global Accelerator through bring your own IP address (BYOIP).
**/
export class ByoipCidrEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
