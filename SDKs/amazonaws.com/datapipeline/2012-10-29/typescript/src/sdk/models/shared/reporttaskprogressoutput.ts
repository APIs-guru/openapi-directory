import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportTaskProgressOutput
/** 
 * Contains the output of ReportTaskProgress.
**/
export class ReportTaskProgressOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canceled" })
  canceled: boolean;
}
