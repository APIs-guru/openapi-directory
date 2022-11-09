import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TypedLinkSchemaAndFacetName
/** 
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
export class TypedLinkSchemaAndFacetName extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn: string;

  @Metadata({ data: "json, name=TypedLinkName" })
  typedLinkName: string;
}
