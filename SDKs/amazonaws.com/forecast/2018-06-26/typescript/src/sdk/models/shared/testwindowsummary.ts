import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestWindowSummary
/** 
 * The status, start time, and end time of a backtest, as well as a failure reason if applicable.
**/
export class TestWindowSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=TestWindowEnd" })
  testWindowEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=TestWindowStart" })
  testWindowStart?: Date;
}
