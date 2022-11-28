import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BinaryColumnStatisticsData
/** 
 * Defines column statistics supported for bit sequence data values.
**/
export class BinaryColumnStatisticsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AverageLength" })
  averageLength: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumLength" })
  maximumLength: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;
}
