import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Segment } from "./segment";


export class GetPartitionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=ExcludeColumnSchema" })
  excludeColumnSchema?: boolean;

  @Metadata({ data: "json, name=Expression" })
  expression?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Segment" })
  segment?: Segment;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
