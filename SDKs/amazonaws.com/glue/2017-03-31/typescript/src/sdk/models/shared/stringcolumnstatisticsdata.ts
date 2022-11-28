import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StringColumnStatisticsData
/** 
 * Defines column statistics supported for character sequence data values.
**/
export class StringColumnStatisticsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AverageLength" })
  averageLength: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumLength" })
  maximumLength: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfDistinctValues" })
  numberOfDistinctValues: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;
}
