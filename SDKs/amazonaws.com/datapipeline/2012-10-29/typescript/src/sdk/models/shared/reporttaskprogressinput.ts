import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";



// ReportTaskProgressInput
/** 
 * Contains the parameters for ReportTaskProgress.
**/
export class ReportTaskProgressInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: Field })
  fields?: Field[];

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId: string;
}
