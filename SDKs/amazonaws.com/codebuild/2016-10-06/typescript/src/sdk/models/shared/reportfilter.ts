import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportStatusTypeEnum } from "./reportstatustypeenum";


// ReportFilter
/** 
 *  A filter used to return reports with the status specified by the input <code>status</code> parameter. 
**/
export class ReportFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: ReportStatusTypeEnum;
}
