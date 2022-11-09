import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchemaListItem } from "./schemalistitem";


export class ListSchemasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Schemas", elemType: shared.SchemaListItem })
  schemas?: SchemaListItem[];
}
