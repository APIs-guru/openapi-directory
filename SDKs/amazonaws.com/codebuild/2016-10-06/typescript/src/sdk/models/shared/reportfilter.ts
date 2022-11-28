import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportStatusTypeEnum } from "./reportstatustypeenum";



// ReportFilter
/** 
 *  A filter used to return reports with the status specified by the input <code>status</code> parameter. 
**/
export class ReportFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ReportStatusTypeEnum;
}
