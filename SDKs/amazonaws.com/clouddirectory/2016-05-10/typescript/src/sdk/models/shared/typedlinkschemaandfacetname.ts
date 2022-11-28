import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TypedLinkSchemaAndFacetName
/** 
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
export class TypedLinkSchemaAndFacetName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn: string;

  @SpeakeasyMetadata({ data: "json, name=TypedLinkName" })
  typedLinkName: string;
}
