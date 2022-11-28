import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a non-overlapping region of a table's partitions, allowing multiple requests to be run in parallel.
**/
export declare class Segment extends SpeakeasyBase {
    segmentNumber: number;
    totalSegments: number;
}
