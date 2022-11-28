import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";



// Commit
/** 
 * Returns information about a specific commit.
**/
export class Commit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalData" })
  additionalData?: string;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=commitId" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=committer" })
  committer?: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=parents" })
  parents?: string[];

  @SpeakeasyMetadata({ data: "json, name=treeId" })
  treeId?: string;
}
