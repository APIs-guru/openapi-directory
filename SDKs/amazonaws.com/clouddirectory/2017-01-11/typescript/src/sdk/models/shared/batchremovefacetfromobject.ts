import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";


// BatchRemoveFacetFromObject
/** 
 * A batch operation to remove a facet from an object.
**/
export class BatchRemoveFacetFromObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;

  @Metadata({ data: "json, name=SchemaFacet" })
  schemaFacet: SchemaFacet;
}
