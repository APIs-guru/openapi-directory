import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserInfo } from "./userinfo";
import { UserInfo } from "./userinfo";


// Commit
/** 
 * Returns information about a specific commit.
**/
export class Commit extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalData" })
  additionalData?: string;

  @Metadata({ data: "json, name=author" })
  author?: UserInfo;

  @Metadata({ data: "json, name=commitId" })
  commitId?: string;

  @Metadata({ data: "json, name=committer" })
  committer?: UserInfo;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=parents" })
  parents?: string[];

  @Metadata({ data: "json, name=treeId" })
  treeId?: string;
}
