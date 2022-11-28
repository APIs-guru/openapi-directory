import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a create branch operation.
**/
export declare class CreateBranchInput extends SpeakeasyBase {
    branchName: string;
    commitId: string;
    repositoryName: string;
}
