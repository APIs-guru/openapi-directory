import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SseSpecification
/** 
 * Represents the settings used to enable server-side encryption.
**/
export class SseSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled: boolean;
}
