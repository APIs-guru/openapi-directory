import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=CodeReviewArn" })
  codeReviewArn?: string;

  @Metadata({ data: "json, name=CreatedTimeStamp" })
  createdTimeStamp?: Date;

  @Metadata({ data: "json, name=LastUpdatedTimeStamp" })
  lastUpdatedTimeStamp?: Date;

  @Metadata({ data: "json, name=MetricsSummary" })
  metricsSummary?: MetricsSummary;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=ProviderType" })
  providerType?: ProviderTypeEnum;

  @Metadata({ data: "json, name=PullRequestId" })
  pullRequestId?: string;

  @Metadata({ data: "json, name=RepositoryName" })
  repositoryName?: string;

  @Metadata({ data: "json, name=SourceCodeType" })
  sourceCodeType?: SourceCodeType;

  @Metadata({ data: "json, name=State" })
  state?: JobStateEnum;

  @Metadata({ data: "json, name=Type" })
  type?: TypeEnum;
}
