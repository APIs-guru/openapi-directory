import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StringColumnStatisticsData
/** 
 * Defines column statistics supported for character sequence data values.
**/
export class StringColumnStatisticsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=AverageLength" })
  averageLength: number;

  @Metadata({ data: "json, name=MaximumLength" })
  maximumLength: number;

  @Metadata({ data: "json, name=NumberOfDistinctValues" })
  numberOfDistinctValues: number;

  @Metadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;
}
