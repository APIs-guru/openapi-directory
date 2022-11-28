import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Latency
/** 
 * Represents the average latency for the slowest X percent of requests over the last 10 seconds.
**/
export class Latency extends SpeakeasyBase {
  @SpeakeasyMetadata()
  p10?: number;

  @SpeakeasyMetadata()
  p50?: number;

  @SpeakeasyMetadata()
  p75?: number;

  @SpeakeasyMetadata()
  p85?: number;

  @SpeakeasyMetadata()
  p90?: number;

  @SpeakeasyMetadata()
  p95?: number;

  @SpeakeasyMetadata()
  p99?: number;

  @SpeakeasyMetadata()
  p999?: number;
}
