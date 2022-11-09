import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcknowledgeFlow
/** 
 * Specifies whether to get notified for alarm state changes.
**/
export class AcknowledgeFlow extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;
}
