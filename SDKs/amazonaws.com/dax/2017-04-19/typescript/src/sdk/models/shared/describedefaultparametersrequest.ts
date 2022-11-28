import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDefaultParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
