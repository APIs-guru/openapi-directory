import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricsSummary } from "./metricssummary";
import { ProviderTypeEnum } from "./providertypeenum";
import { SourceCodeType } from "./sourcecodetype";
import { JobStateEnum } from "./jobstateenum";
import { TypeEnum } from "./typeenum";



// CodeReviewSummary
/** 
 *  Information about the summary of the code review. 
**/
export class CodeReviewSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeReviewArn" })
  codeReviewArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTimeStamp" })
  createdTimeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTimeStamp" })
  lastUpdatedTimeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=MetricsSummary" })
  metricsSummary?: MetricsSummary;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderType" })
  providerType?: ProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PullRequestId" })
  pullRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=RepositoryName" })
  repositoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceCodeType" })
  sourceCodeType?: SourceCodeType;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: JobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: TypeEnum;
}
