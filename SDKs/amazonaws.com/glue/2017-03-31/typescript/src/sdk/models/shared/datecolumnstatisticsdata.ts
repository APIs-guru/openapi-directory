import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DateColumnStatisticsData
/** 
 * Defines column statistics supported for timestamp data columns.
**/
export class DateColumnStatisticsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaximumValue" })
  maximumValue?: Date;

  @Metadata({ data: "json, name=MinimumValue" })
  minimumValue?: Date;

  @Metadata({ data: "json, name=NumberOfDistinctValues" })
  numberOfDistinctValues: number;

  @Metadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;
}
