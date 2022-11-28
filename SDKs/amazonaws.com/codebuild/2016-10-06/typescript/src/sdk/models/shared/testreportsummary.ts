import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestReportSummary
/** 
 *  Information about a test report. 
**/
export class TestReportSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationInNanoSeconds" })
  durationInNanoSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=statusCounts" })
  statusCounts: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}
