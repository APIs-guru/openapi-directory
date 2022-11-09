import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";


// Task
/** 
 * Task object encapsulating task information.
**/
export class Task extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProgressPercent" })
  progressPercent?: number;

  @Metadata({ data: "json, name=Status" })
  status: StatusEnum;

  @Metadata({ data: "json, name=StatusDetail" })
  statusDetail?: string;
}
