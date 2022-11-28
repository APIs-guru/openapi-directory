import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DecimalNumber } from "./decimalnumber";



// DecimalColumnStatisticsData
/** 
 * Defines column statistics supported for fixed-point number data columns.
**/
export class DecimalColumnStatisticsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaximumValue" })
  maximumValue?: DecimalNumber;

  @SpeakeasyMetadata({ data: "json, name=MinimumValue" })
  minimumValue?: DecimalNumber;

  @SpeakeasyMetadata({ data: "json, name=NumberOfDistinctValues" })
  numberOfDistinctValues: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;
}
