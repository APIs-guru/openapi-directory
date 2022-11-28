import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";



// BatchRemoveFacetFromObject
/** 
 * A batch operation to remove a facet from an object.
**/
export class BatchRemoveFacetFromObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=SchemaFacet" })
  schemaFacet: SchemaFacet;
}
