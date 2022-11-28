import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";



// BatchGetObjectAttributes
/** 
 * Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchGetObjectAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeNames" })
  attributeNames: string[];

  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=SchemaFacet" })
  schemaFacet: SchemaFacet;
}
