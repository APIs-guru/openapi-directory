import { SpeakeasyBase } from "../../../internal/utils";
import { PathToObjectIdentifiers } from "./pathtoobjectidentifiers";
/**
 * Represents the output of a <a>ListObjectParentPaths</a> response operation.
**/
export declare class BatchListObjectParentPathsResponse extends SpeakeasyBase {
    nextToken?: string;
    pathToObjectIdentifiersList?: PathToObjectIdentifiers[];
}
