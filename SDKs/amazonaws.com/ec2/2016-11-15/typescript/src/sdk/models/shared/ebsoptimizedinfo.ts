import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EbsOptimizedInfo
/** 
 * Describes the optimized EBS performance for supported instance types.
**/
export class EbsOptimizedInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baselineBandwidthInMbps?: number;

  @SpeakeasyMetadata()
  baselineIops?: number;

  @SpeakeasyMetadata()
  baselineThroughputInMBps?: number;

  @SpeakeasyMetadata()
  maximumBandwidthInMbps?: number;

  @SpeakeasyMetadata()
  maximumIops?: number;

  @SpeakeasyMetadata()
  maximumThroughputInMBps?: number;
}
