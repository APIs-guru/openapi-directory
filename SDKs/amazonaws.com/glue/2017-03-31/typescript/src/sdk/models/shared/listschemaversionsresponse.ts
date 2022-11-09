import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchemaVersionListItem } from "./schemaversionlistitem";


export class ListSchemaVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Schemas", elemType: shared.SchemaVersionListItem })
  schemas?: SchemaVersionListItem[];
}
