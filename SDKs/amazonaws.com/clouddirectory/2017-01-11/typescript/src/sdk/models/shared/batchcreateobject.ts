import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeKeyAndValue } from "./attributekeyandvalue";
import { ObjectReference } from "./objectreference";
import { SchemaFacet } from "./schemafacet";


// BatchCreateObject
/** 
 * Represents the output of a <a>CreateObject</a> operation.
**/
export class BatchCreateObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchReferenceName" })
  batchReferenceName?: string;

  @Metadata({ data: "json, name=LinkName" })
  linkName?: string;

  @Metadata({ data: "json, name=ObjectAttributeList", elemType: shared.AttributeKeyAndValue })
  objectAttributeList: AttributeKeyAndValue[];

  @Metadata({ data: "json, name=ParentReference" })
  parentReference?: ObjectReference;

  @Metadata({ data: "json, name=SchemaFacet", elemType: shared.SchemaFacet })
  schemaFacet: SchemaFacet[];
}
