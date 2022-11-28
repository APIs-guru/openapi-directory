import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaExtensionInfo } from "./schemaextensioninfo";



export class ListSchemaExtensionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaExtensionsInfo", elemType: SchemaExtensionInfo })
  schemaExtensionsInfo?: SchemaExtensionInfo[];
}
