import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LongColumnStatisticsData
/** 
 * Defines column statistics supported for integer data columns.
**/
export class LongColumnStatisticsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaximumValue" })
  maximumValue?: number;

  @SpeakeasyMetadata({ data: "json, name=MinimumValue" })
  minimumValue?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfDistinctValues" })
  numberOfDistinctValues: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;
}
