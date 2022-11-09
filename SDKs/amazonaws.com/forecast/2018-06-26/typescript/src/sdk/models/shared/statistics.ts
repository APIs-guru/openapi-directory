import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Statistics
/** 
 * Provides statistics for each data field imported into to an Amazon Forecast dataset with the <a>CreateDatasetImportJob</a> operation.
**/
export class Statistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=Avg" })
  avg?: number;

  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=CountDistinct" })
  countDistinct?: number;

  @Metadata({ data: "json, name=CountDistinctLong" })
  countDistinctLong?: number;

  @Metadata({ data: "json, name=CountLong" })
  countLong?: number;

  @Metadata({ data: "json, name=CountNan" })
  countNan?: number;

  @Metadata({ data: "json, name=CountNanLong" })
  countNanLong?: number;

  @Metadata({ data: "json, name=CountNull" })
  countNull?: number;

  @Metadata({ data: "json, name=CountNullLong" })
  countNullLong?: number;

  @Metadata({ data: "json, name=Max" })
  max?: string;

  @Metadata({ data: "json, name=Min" })
  min?: string;

  @Metadata({ data: "json, name=Stddev" })
  stddev?: number;
}
