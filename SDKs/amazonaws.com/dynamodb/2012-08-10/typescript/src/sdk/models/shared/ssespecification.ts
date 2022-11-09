import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SseTypeEnum } from "./ssetypeenum";


// SseSpecification
/** 
 * Represents the settings used to enable server-side encryption.
**/
export class SseSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=KMSMasterKeyId" })
  kmsMasterKeyId?: string;

  @Metadata({ data: "json, name=SSEType" })
  sseType?: SseTypeEnum;
}
