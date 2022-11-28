import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AnalysisTypes" })
  analysisTypes?: AnalysisTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=AssociationArn" })
  associationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CodeReviewArn" })
  codeReviewArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTimeStamp" })
  createdTimeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTimeStamp" })
  lastUpdatedTimeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Metrics" })
  metrics?: Metrics;

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

  @SpeakeasyMetadata({ data: "json, name=StateReason" })
  stateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: TypeEnum;
}
