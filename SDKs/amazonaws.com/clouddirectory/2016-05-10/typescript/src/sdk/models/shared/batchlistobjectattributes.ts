import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaFacet } from "./schemafacet";
import { ObjectReference } from "./objectreference";



// BatchListObjectAttributes
/** 
 * Represents the output of a <a>ListObjectAttributes</a> operation.
**/
export class BatchListObjectAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FacetFilter" })
  facetFilter?: SchemaFacet;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;
}
