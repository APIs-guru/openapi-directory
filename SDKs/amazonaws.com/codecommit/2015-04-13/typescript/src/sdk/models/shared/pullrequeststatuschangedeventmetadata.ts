import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";



// PullRequestStatusChangedEventMetadata
/** 
 * Information about a change to the status of a pull request.
**/
export class PullRequestStatusChangedEventMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullRequestStatus" })
  pullRequestStatus?: PullRequestStatusEnumEnum;
}
