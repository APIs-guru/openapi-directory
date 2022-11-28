import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeClustersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
