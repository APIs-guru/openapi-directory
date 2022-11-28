import { SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";
/**
 * Represents the output of a <a>ListIncomingTypedLinks</a> response operation.
**/
export declare class BatchListIncomingTypedLinksResponse extends SpeakeasyBase {
    linkSpecifiers?: TypedLinkSpecifier[];
    nextToken?: string;
}
