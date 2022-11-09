import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaFacet } from "./schemafacet";
import { ObjectReference } from "./objectreference";


// BatchListObjectAttributes
/** 
 * Represents the output of a <a>ListObjectAttributes</a> operation.
**/
export class BatchListObjectAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=FacetFilter" })
  facetFilter?: SchemaFacet;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;
}
