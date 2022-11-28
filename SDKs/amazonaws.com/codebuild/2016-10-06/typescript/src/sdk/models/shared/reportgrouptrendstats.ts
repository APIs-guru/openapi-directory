import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportGroupTrendStats
/** 
 * Contains trend statistics for a set of reports. The actual values depend on the type of trend being collected. For more information, see .
**/
export class ReportGroupTrendStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: string;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: string;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: string;
}
