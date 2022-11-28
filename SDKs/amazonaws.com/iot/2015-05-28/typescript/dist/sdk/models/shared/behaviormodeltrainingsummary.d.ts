import { SpeakeasyBase } from "../../../internal/utils";
import { ModelStatusEnum } from "./modelstatusenum";
/**
 *  The summary of an ML Detect behavior model.
**/
export declare class BehaviorModelTrainingSummary extends SpeakeasyBase {
    behaviorName?: string;
    datapointsCollectionPercentage?: number;
    lastModelRefreshDate?: Date;
    modelStatus?: ModelStatusEnum;
    securityProfileName?: string;
    trainingDataCollectionStartDate?: Date;
}
