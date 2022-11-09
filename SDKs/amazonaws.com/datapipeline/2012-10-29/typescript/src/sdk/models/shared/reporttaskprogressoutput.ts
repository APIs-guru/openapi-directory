import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportTaskProgressOutput
/** 
 * Contains the output of ReportTaskProgress.
**/
export class ReportTaskProgressOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=canceled" })
  canceled: boolean;
}
