import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Statistics
/** 
 * Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a>CreateDatasetImportJob</a> operation.
**/
export class Statistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Avg" })
  avg?: number;

  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=CountDistinct" })
  countDistinct?: number;

  @SpeakeasyMetadata({ data: "json, name=CountDistinctLong" })
  countDistinctLong?: number;

  @SpeakeasyMetadata({ data: "json, name=CountLong" })
  countLong?: number;

  @SpeakeasyMetadata({ data: "json, name=CountNan" })
  countNan?: number;

  @SpeakeasyMetadata({ data: "json, name=CountNanLong" })
  countNanLong?: number;

  @SpeakeasyMetadata({ data: "json, name=CountNull" })
  countNull?: number;

  @SpeakeasyMetadata({ data: "json, name=CountNullLong" })
  countNullLong?: number;

  @SpeakeasyMetadata({ data: "json, name=Max" })
  max?: string;

  @SpeakeasyMetadata({ data: "json, name=Min" })
  min?: string;

  @SpeakeasyMetadata({ data: "json, name=Stddev" })
  stddev?: number;
}
