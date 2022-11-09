import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelStatusEnum } from "./modelstatusenum";


// BehaviorModelTrainingSummary
/** 
 *  The summary of an ML Detect behavior model. 
**/
export class BehaviorModelTrainingSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=behaviorName" })
  behaviorName?: string;

  @Metadata({ data: "json, name=datapointsCollectionPercentage" })
  datapointsCollectionPercentage?: number;

  @Metadata({ data: "json, name=lastModelRefreshDate" })
  lastModelRefreshDate?: Date;

  @Metadata({ data: "json, name=modelStatus" })
  modelStatus?: ModelStatusEnum;

  @Metadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;

  @Metadata({ data: "json, name=trainingDataCollectionStartDate" })
  trainingDataCollectionStartDate?: Date;
}
