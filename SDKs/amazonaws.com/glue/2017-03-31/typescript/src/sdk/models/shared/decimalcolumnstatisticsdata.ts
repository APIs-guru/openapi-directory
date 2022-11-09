import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DecimalNumber } from "./decimalnumber";
import { DecimalNumber } from "./decimalnumber";


// DecimalColumnStatisticsData
/** 
 * Defines column statistics supported for fixed-point number data columns.
**/
export class DecimalColumnStatisticsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaximumValue" })
  maximumValue?: DecimalNumber;

  @Metadata({ data: "json, name=MinimumValue" })
  minimumValue?: DecimalNumber;

  @Metadata({ data: "json, name=NumberOfDistinctValues" })
  numberOfDistinctValues: number;

  @Metadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;
}
