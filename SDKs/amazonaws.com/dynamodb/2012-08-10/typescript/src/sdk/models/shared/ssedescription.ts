import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SseTypeEnum } from "./ssetypeenum";
import { SseStatusEnum } from "./ssestatusenum";



// SseDescription
/** 
 * The description of the server-side encryption status on the specified table.
**/
export class SseDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InaccessibleEncryptionDateTime" })
  inaccessibleEncryptionDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=KMSMasterKeyArn" })
  kmsMasterKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SSEType" })
  sseType?: SseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: SseStatusEnum;
}
