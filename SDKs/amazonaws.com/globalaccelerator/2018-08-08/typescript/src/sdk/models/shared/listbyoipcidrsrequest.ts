import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListByoipCidrsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
