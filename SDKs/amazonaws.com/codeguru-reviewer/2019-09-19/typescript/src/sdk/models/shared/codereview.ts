import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalysisTypeEnum } from "./analysistypeenum";
import { Metrics } from "./metrics";
import { ProviderTypeEnum } from "./providertypeenum";
import { SourceCodeType } from "./sourcecodetype";
import { JobStateEnum } from "./jobstateenum";
import { TypeEnum } from "./typeenum";


// CodeReview
/** 
 *  Information about a code review. A code review belongs to the associated repository that contains the reviewed code. 
**/
export class CodeReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnalysisTypes" })
  analysisTypes?: AnalysisTypeEnum[];

  @Metadata({ data: "json, name=AssociationArn" })
  associationArn?: string;

  @Metadata({ data: "json, name=CodeReviewArn" })
  codeReviewArn?: string;

  @Metadata({ data: "json, name=CreatedTimeStamp" })
  createdTimeStamp?: Date;

  @Metadata({ data: "json, name=LastUpdatedTimeStamp" })
  lastUpdatedTimeStamp?: Date;

  @Metadata({ data: "json, name=Metrics" })
  metrics?: Metrics;

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

  @Metadata({ data: "json, name=StateReason" })
  stateReason?: string;

  @Metadata({ data: "json, name=Type" })
  type?: TypeEnum;
}
