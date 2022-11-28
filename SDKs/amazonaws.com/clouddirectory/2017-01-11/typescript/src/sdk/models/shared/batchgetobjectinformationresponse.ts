import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaFacet } from "./schemafacet";



// BatchGetObjectInformationResponse
/** 
 * Represents the output of a <a>GetObjectInformation</a> response operation.
**/
export class BatchGetObjectInformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaFacets", elemType: SchemaFacet })
  schemaFacets?: SchemaFacet[];
}
