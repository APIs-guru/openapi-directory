import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregationAuthorization } from "./aggregationauthorization";


export class PutAggregationAuthorizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AggregationAuthorization" })
  aggregationAuthorization?: AggregationAuthorization;
}
