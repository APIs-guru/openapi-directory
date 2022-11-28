import { SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkAttributeRange } from "./typedlinkattributerange";
import { TypedLinkSchemaAndFacetName } from "./typedlinkschemaandfacetname";
import { ObjectReference } from "./objectreference";
/**
 * Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchListIncomingTypedLinks extends SpeakeasyBase {
    filterAttributeRanges?: TypedLinkAttributeRange[];
    filterTypedLink?: TypedLinkSchemaAndFacetName;
    maxResults?: number;
    nextToken?: string;
    objectReference: ObjectReference;
}
