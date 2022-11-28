import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Returns information about a specific commit.
**/
export declare class Commit extends SpeakeasyBase {
    additionalData?: string;
    author?: UserInfo;
    commitId?: string;
    committer?: UserInfo;
    message?: string;
    parents?: string[];
    treeId?: string;
}
