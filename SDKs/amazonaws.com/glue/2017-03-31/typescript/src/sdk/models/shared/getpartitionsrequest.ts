import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";



export class GetPartitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=ExcludeColumnSchema" })
  excludeColumnSchema?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Segment" })
  segment?: Segment;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
