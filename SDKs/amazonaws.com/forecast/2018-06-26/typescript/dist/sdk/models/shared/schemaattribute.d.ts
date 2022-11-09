import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeTypeEnum } from "./attributetypeenum";
/**
 * An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The <a>Schema</a> object contains an array of <code>SchemaAttribute</code> objects.
**/
export declare class SchemaAttribute extends SpeakeasyBase {
    attributeName?: string;
    attributeType?: AttributeTypeEnum;
}
