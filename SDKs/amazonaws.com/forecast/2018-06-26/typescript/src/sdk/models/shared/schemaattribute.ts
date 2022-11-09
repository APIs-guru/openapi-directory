import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeTypeEnum } from "./attributetypeenum";


// SchemaAttribute
/** 
 * An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a>Schema</a> object contains an array of <code>SchemaAttribute</code> objects.
**/
export class SchemaAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=AttributeType" })
  attributeType?: AttributeTypeEnum;
}
