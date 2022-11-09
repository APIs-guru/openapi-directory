import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SseSpecification
/** 
 * Represents the settings used to enable server-side encryption.
**/
export class SseSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled: boolean;
}
