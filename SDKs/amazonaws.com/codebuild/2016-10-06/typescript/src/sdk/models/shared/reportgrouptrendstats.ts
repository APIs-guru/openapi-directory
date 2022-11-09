import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportGroupTrendStats
/** 
 * Contains trend statistics for a set of reports. The actual values depend on the type of trend being collected. For more information, see .
**/
export class ReportGroupTrendStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=average" })
  average?: string;

  @Metadata({ data: "json, name=max" })
  max?: string;

  @Metadata({ data: "json, name=min" })
  min?: string;
}
