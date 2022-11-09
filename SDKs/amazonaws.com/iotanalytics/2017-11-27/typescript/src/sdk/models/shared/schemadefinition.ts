import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Column } from "./column";


// SchemaDefinition
/** 
 * Information needed to define a schema.
**/
export class SchemaDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns", elemType: shared.Column })
  columns?: Column[];
}
