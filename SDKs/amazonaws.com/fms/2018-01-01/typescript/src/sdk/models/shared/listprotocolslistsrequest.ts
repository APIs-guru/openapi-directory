import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListProtocolsListsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultLists" })
  defaultLists?: boolean;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
