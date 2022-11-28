import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeTypeEnum } from "./attributetypeenum";



// SchemaAttribute
/** 
 * An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a>Schema</a> object contains an array of <code>SchemaAttribute</code> objects.
**/
export class SchemaAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=AttributeType" })
  attributeType?: AttributeTypeEnum;
}
