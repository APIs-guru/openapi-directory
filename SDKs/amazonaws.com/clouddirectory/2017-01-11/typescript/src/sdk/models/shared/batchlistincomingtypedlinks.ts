import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TypedLinkAttributeRange } from "./typedlinkattributerange";
import { TypedLinkSchemaAndFacetName } from "./typedlinkschemaandfacetname";
import { ObjectReference } from "./objectreference";


// BatchListIncomingTypedLinks
/** 
 * Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchListIncomingTypedLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=FilterAttributeRanges", elemType: shared.TypedLinkAttributeRange })
  filterAttributeRanges?: TypedLinkAttributeRange[];

  @Metadata({ data: "json, name=FilterTypedLink" })
  filterTypedLink?: TypedLinkSchemaAndFacetName;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;
}
