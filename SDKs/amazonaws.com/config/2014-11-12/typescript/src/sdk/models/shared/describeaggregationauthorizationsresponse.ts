import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregationAuthorization } from "./aggregationauthorization";



export class DescribeAggregationAuthorizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AggregationAuthorizations", elemType: AggregationAuthorization })
  aggregationAuthorizations?: AggregationAuthorization[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
