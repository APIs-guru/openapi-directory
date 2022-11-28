import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributeKey
/** 
 * A unique identifier for an attribute.
**/
export class AttributeKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FacetName" })
  facetName: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn: string;
}
