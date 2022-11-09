import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeKeyAndValue } from "./attributekeyandvalue";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";


// BatchAddFacetToObject
/** 
 * Represents the output of a batch add facet to object operation.
**/
export class BatchAddFacetToObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectAttributeList", elemType: shared.AttributeKeyAndValue })
  objectAttributeList: AttributeKeyAndValue[];

  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;

  @Metadata({ data: "json, name=SchemaFacet" })
  schemaFacet: SchemaFacet;
}
