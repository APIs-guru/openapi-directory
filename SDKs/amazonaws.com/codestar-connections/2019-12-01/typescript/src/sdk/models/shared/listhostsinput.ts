import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListHostsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
