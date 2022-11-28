import { SpeakeasyBase } from "../../../internal/utils";
import { PullRequestStatusEnumEnum } from "./pullrequeststatusenumenum";
export declare class UpdatePullRequestStatusInput extends SpeakeasyBase {
    pullRequestId: string;
    pullRequestStatus: PullRequestStatusEnumEnum;
}
