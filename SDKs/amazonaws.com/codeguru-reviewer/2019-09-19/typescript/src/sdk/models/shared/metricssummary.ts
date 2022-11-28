import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricsSummary
/** 
 *  Information about metrics summaries. 
**/
export class MetricsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FindingsCount" })
  findingsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=MeteredLinesOfCodeCount" })
  meteredLinesOfCodeCount?: number;
}
