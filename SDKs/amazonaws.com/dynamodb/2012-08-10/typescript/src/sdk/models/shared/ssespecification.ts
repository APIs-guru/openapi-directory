import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SseTypeEnum } from "./ssetypeenum";



// SseSpecification
/** 
 * Represents the settings used to enable server-side encryption.
**/
export class SseSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KMSMasterKeyId" })
  kmsMasterKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=SSEType" })
  sseType?: SseTypeEnum;
}
