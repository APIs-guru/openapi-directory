import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricsSummary
/** 
 *  Information about metrics summaries. 
**/
export class MetricsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=FindingsCount" })
  findingsCount?: number;

  @Metadata({ data: "json, name=MeteredLinesOfCodeCount" })
  meteredLinesOfCodeCount?: number;
}
