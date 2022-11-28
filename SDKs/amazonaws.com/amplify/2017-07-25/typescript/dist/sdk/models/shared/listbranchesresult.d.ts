import { SpeakeasyBase } from "../../../internal/utils";
import { Branch } from "./branch";
/**
 *  The result structure for the list branches request.
**/
export declare class ListBranchesResult extends SpeakeasyBase {
    branches: Branch[];
    nextToken?: string;
}
