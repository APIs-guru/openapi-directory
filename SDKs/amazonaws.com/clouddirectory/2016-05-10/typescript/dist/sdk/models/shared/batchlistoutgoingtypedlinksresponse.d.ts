import { SpeakeasyBase } from "../../../internal/utils";
import { TypedLinkSpecifier } from "./typedlinkspecifier";
/**
 * Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.
**/
export declare class BatchListOutgoingTypedLinksResponse extends SpeakeasyBase {
    nextToken?: string;
    typedLinkSpecifiers?: TypedLinkSpecifier[];
}
