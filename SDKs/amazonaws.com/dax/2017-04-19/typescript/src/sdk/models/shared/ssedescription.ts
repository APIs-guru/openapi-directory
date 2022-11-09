import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SseStatusEnum } from "./ssestatusenum";


// SseDescription
/** 
 * The description of the server-side encryption status on the specified DAX cluster.
**/
export class SseDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: SseStatusEnum;
}
