import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LongColumnStatisticsData
/** 
 * Defines column statistics supported for integer data columns.
**/
export class LongColumnStatisticsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaximumValue" })
  maximumValue?: number;

  @Metadata({ data: "json, name=MinimumValue" })
  minimumValue?: number;

  @Metadata({ data: "json, name=NumberOfDistinctValues" })
  numberOfDistinctValues: number;

  @Metadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;
}
