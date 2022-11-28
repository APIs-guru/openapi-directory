import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DoubleColumnStatisticsData
/** 
 * Defines column statistics supported for floating-point number data columns.
**/
export class DoubleColumnStatisticsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaximumValue" })
  maximumValue?: number;

  @SpeakeasyMetadata({ data: "json, name=MinimumValue" })
  minimumValue?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfDistinctValues" })
  numberOfDistinctValues: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;
}
