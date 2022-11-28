import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeKeyAndValue } from "./attributekeyandvalue";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";



// BatchCreateObject
/** 
 * Represents the output of a <a>CreateObject</a> operation.
**/
export class BatchCreateObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchReferenceName" })
  batchReferenceName?: string;

  @SpeakeasyMetadata({ data: "json, name=LinkName" })
  linkName?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectAttributeList", elemType: AttributeKeyAndValue })
  objectAttributeList: AttributeKeyAndValue[];

  @SpeakeasyMetadata({ data: "json, name=ParentReference" })
  parentReference?: ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=SchemaFacet", elemType: SchemaFacet })
  schemaFacet: SchemaFacet[];
}
