import { SpeakeasyBase } from "../../../internal/utils";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";
/**
 * Information about a change to the status of a pull request.
**/
export declare class PullRequestStatusChangedEventMetadata extends SpeakeasyBase {
    pullRequestStatus?: PullRequestStatusEnumEnum;
}
