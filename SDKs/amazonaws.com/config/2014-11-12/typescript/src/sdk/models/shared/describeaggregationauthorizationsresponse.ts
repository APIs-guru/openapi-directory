import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregationAuthorization } from "./aggregationauthorization";


export class DescribeAggregationAuthorizationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AggregationAuthorizations", elemType: shared.AggregationAuthorization })
  aggregationAuthorizations?: AggregationAuthorization[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
