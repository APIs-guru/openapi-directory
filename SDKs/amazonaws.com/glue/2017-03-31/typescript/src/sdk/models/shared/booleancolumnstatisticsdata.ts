import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BooleanColumnStatisticsData
/** 
 * Defines column statistics supported for Boolean data columns.
**/
export class BooleanColumnStatisticsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=NumberOfFalses" })
  numberOfFalses: number;

  @Metadata({ data: "json, name=NumberOfNulls" })
  numberOfNulls: number;

  @Metadata({ data: "json, name=NumberOfTrues" })
  numberOfTrues: number;
}
