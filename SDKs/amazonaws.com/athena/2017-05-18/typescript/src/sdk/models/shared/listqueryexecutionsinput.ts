import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListQueryExecutionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WorkGroup" })
  workGroup?: string;
}
