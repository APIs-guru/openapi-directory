import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestReportSummary
/** 
 *  Information about a test report. 
**/
export class TestReportSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationInNanoSeconds" })
  durationInNanoSeconds: number;

  @Metadata({ data: "json, name=statusCounts" })
  statusCounts: Map<string, number>;

  @Metadata({ data: "json, name=total" })
  total: number;
}
