import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OverrideStatusEnum } from "./overridestatusenum";



export class OverridePullRequestApprovalRulesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overrideStatus" })
  overrideStatus: OverrideStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId: string;
}
