import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttributeKey
/** 
 * A unique identifier for an attribute.
**/
export class AttributeKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=FacetName" })
  facetName: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn: string;
}
