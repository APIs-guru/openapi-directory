import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DateColumnStatisticsData
/** 
 * Defines column statistics supported for timestamp data columns.
**/
export class DateColumnStatisticsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaximumValue" })
  maximumValue?: Date;

  @SpeakeasyMetadata({ data: "json, name=MinimumValue" })
  minimumValue?: Date;

  @SpeakeasyMetadata({ data: "json, name=NumberOfDistinctValues" })
  numberOfDistinctValues: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;
}
