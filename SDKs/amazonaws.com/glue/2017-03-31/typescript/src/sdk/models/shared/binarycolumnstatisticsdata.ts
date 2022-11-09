import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BinaryColumnStatisticsData
/** 
 * Defines column statistics supported for bit sequence data values.
**/
export class BinaryColumnStatisticsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=AverageLength" })
  averageLength: number;

  @Metadata({ data: "json, name=MaximumLength" })
  maximumLength: number;

  @Metadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;
}
