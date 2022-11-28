import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";



// SchemaDefinition
/** 
 * Information needed to define a schema.
**/
export class SchemaDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns", elemType: Column })
  columns?: Column[];
}
