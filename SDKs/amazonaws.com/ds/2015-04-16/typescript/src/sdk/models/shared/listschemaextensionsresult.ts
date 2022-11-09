import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchemaExtensionInfo } from "./schemaextensioninfo";


export class ListSchemaExtensionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SchemaExtensionsInfo", elemType: shared.SchemaExtensionInfo })
  schemaExtensionsInfo?: SchemaExtensionInfo[];
}
