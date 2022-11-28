import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeKeyAndValue } from "./attributekeyandvalue";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";



// BatchAddFacetToObject
/** 
 * Represents the output of a batch add facet to object operation.
**/
export class BatchAddFacetToObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectAttributeList", elemType: AttributeKeyAndValue })
  objectAttributeList: AttributeKeyAndValue[];

  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=SchemaFacet" })
  schemaFacet: SchemaFacet;
}
