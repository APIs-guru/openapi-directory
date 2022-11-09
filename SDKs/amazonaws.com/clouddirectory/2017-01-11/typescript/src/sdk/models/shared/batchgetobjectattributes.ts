import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";


// BatchGetObjectAttributes
/** 
 * Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchGetObjectAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeNames" })
  attributeNames: string[];

  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;

  @Metadata({ data: "json, name=SchemaFacet" })
  schemaFacet: SchemaFacet;
}
