import { SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkAttributeRange } from "./typedlinkattributerange";
import { TypedLinkSchemaAndFacetName } from "./typedlinkschemaandfacetname";
import { ObjectReference } from "./objectreference";
/**
 * Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchListOutgoingTypedLinks extends SpeakeasyBase {
    filterAttributeRanges?: TypedLinkAttributeRange[];
    filterTypedLink?: TypedLinkSchemaAndFacetName;
    maxResults?: number;
    nextToken?: string;
    objectReference: ObjectReference;
}
