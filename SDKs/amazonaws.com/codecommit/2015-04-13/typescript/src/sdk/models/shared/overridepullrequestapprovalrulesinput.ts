import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OverrideStatusEnum } from "./overridestatusenum";


export class OverridePullRequestApprovalRulesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=overrideStatus" })
  overrideStatus: OverrideStatusEnum;

  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId: string;
}
