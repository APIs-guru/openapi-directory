import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaFacet } from "./schemafacet";



export class GetObjectInformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaFacets", elemType: SchemaFacet })
  schemaFacets?: SchemaFacet[];
}
