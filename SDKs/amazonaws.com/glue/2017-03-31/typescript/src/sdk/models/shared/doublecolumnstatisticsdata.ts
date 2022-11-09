import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DoubleColumnStatisticsData
/** 
 * Defines column statistics supported for floating-point number data columns.
**/
export class DoubleColumnStatisticsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaximumValue" })
  maximumValue?: number;

  @Metadata({ data: "json, name=MinimumValue" })
  minimumValue?: number;

  @Metadata({ data: "json, name=NumberOfDistinctValues" })
  numberOfDistinctValues: number;

  @Metadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;
}
