import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeClustersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters" })
  filters?: Map<string, string[]>;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
