import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Field } from "./field";


// ReportTaskProgressInput
/** 
 * Contains the parameters for ReportTaskProgress.
**/
export class ReportTaskProgressInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.Field })
  fields?: Field[];

  @Metadata({ data: "json, name=taskId" })
  taskId: string;
}
