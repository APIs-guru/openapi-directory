import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregationTypeEnum } from "./aggregationtypeenum";


// AggregationConfig
/** 
 *  The aggregation settings that you can use to customize the output format of your flow data. 
**/
export class AggregationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationType" })
  aggregationType?: AggregationTypeEnum;
}
