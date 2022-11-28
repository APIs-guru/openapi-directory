import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregationAuthorization } from "./aggregationauthorization";



export class PutAggregationAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AggregationAuthorization" })
  aggregationAuthorization?: AggregationAuthorization;
}
