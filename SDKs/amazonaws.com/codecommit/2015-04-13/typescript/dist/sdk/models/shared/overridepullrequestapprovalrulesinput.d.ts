import { SpeakeasyBase } from "../../../internal/utils";
import { OverrideStatusEnum } from "./overridestatusenum";
export declare class OverridePullRequestApprovalRulesInput extends SpeakeasyBase {
    overrideStatus: OverrideStatusEnum;
    pullRequestId: string;
    revisionId: string;
}
