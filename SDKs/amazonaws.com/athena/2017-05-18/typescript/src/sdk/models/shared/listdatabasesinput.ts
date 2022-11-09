import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListDatabasesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogName" })
  catalogName: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
