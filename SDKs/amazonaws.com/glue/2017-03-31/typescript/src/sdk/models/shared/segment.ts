import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Segment
/** 
 * Defines a non-overlapping region of a table's partitions, allowing multiple requests to be run in parallel.
**/
export class Segment extends SpeakeasyBase {
  @Metadata({ data: "json, name=SegmentNumber" })
  segmentNumber: number;

  @Metadata({ data: "json, name=TotalSegments" })
  totalSegments: number;
}
