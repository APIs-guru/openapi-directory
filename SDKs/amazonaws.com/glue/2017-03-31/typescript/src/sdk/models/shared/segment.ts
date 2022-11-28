import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Segment
/** 
 * Defines a non-overlapping region of a table's partitions, allowing multiple requests to be run in parallel.
**/
export class Segment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SegmentNumber" })
  segmentNumber: number;

  @SpeakeasyMetadata({ data: "json, name=TotalSegments" })
  totalSegments: number;
}
