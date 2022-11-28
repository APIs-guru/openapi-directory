import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaListItem } from "./schemalistitem";



export class ListSchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Schemas", elemType: SchemaListItem })
  schemas?: SchemaListItem[];
}
