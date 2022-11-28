import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SseStatusEnum } from "./ssestatusenum";



// SseDescription
/** 
 * The description of the server-side encryption status on the specified DAX cluster.
**/
export class SseDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: SseStatusEnum;
}
