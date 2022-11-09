import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchemaFacet } from "./schemafacet";


// BatchGetObjectInformationResponse
/** 
 * Represents the output of a <a>GetObjectInformation</a> response operation.
**/
export class BatchGetObjectInformationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;

  @Metadata({ data: "json, name=SchemaFacets", elemType: shared.SchemaFacet })
  schemaFacets?: SchemaFacet[];
}
