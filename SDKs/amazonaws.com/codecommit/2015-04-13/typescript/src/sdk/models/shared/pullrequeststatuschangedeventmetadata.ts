import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";


// PullRequestStatusChangedEventMetadata
/** 
 * Information about a change to the status of a pull request.
**/
export class PullRequestStatusChangedEventMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=pullRequestStatus" })
  pullRequestStatus?: PullRequestStatusEnumEnum;
}
