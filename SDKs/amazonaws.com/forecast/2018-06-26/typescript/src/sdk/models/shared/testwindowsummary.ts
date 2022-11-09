import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestWindowSummary
/** 
 * The status, start time, and end time of a backtest, as well as a failure reason if applicable.
**/
export class TestWindowSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=TestWindowEnd" })
  testWindowEnd?: Date;

  @Metadata({ data: "json, name=TestWindowStart" })
  testWindowStart?: Date;
}
