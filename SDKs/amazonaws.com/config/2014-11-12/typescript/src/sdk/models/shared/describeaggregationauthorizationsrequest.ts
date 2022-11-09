import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAggregationAuthorizationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
