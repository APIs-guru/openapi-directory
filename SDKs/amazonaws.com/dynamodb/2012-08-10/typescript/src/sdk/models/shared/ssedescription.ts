import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SseTypeEnum } from "./ssetypeenum";
import { SseStatusEnum } from "./ssestatusenum";


// SseDescription
/** 
 * The description of the server-side encryption status on the specified table.
**/
export class SseDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=InaccessibleEncryptionDateTime" })
  inaccessibleEncryptionDateTime?: Date;

  @Metadata({ data: "json, name=KMSMasterKeyArn" })
  kmsMasterKeyArn?: string;

  @Metadata({ data: "json, name=SSEType" })
  sseType?: SseTypeEnum;

  @Metadata({ data: "json, name=Status" })
  status?: SseStatusEnum;
}
