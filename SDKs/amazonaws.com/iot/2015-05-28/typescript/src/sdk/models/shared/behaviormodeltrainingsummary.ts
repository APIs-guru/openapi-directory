import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelStatusEnum } from "./modelstatusenum";



// BehaviorModelTrainingSummary
/** 
 *  The summary of an ML Detect behavior model. 
**/
export class BehaviorModelTrainingSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=behaviorName" })
  behaviorName?: string;

  @SpeakeasyMetadata({ data: "json, name=datapointsCollectionPercentage" })
  datapointsCollectionPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=lastModelRefreshDate" })
  lastModelRefreshDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=modelStatus" })
  modelStatus?: ModelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=securityProfileName" })
  securityProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=trainingDataCollectionStartDate" })
  trainingDataCollectionStartDate?: Date;
}
