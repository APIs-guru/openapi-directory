import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchemaFacet } from "./schemafacet";


export class GetObjectInformationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectIdentifier" })
  objectIdentifier?: string;

  @Metadata({ data: "json, name=SchemaFacets", elemType: shared.SchemaFacet })
  schemaFacets?: SchemaFacet[];
}
