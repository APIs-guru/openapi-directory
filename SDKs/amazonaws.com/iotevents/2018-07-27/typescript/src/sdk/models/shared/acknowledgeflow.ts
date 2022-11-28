import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcknowledgeFlow
/** 
 * Specifies whether to get notified for alarm state changes.
**/
export class AcknowledgeFlow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;
}
