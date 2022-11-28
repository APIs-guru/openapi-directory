import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDatabasesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogName" })
  catalogName: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
