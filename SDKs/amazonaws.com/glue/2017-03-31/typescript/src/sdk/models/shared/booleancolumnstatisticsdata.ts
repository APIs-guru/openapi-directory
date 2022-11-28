import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BooleanColumnStatisticsData
/** 
 * Defines column statistics supported for Boolean data columns.
**/
export class BooleanColumnStatisticsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NumberOfFalses" })
  numberOfFalses: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfTrues" })
  numberOfTrues: number;
}
