import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkAttributeRange } from "./typedlinkattributerange";
import { TypedLinkSchemaAndFacetName } from "./typedlinkschemaandfacetname";
import { ObjectReference } from "./objectreference";



// BatchListOutgoingTypedLinks
/** 
 * Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchListOutgoingTypedLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FilterAttributeRanges", elemType: TypedLinkAttributeRange })
  filterAttributeRanges?: TypedLinkAttributeRange[];

  @SpeakeasyMetadata({ data: "json, name=FilterTypedLink" })
  filterTypedLink?: TypedLinkSchemaAndFacetName;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;
}
