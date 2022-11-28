import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



// Task
/** 
 * Task object encapsulating task information.
**/
export class Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProgressPercent" })
  progressPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetail" })
  statusDetail?: string;
}
