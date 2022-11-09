import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceDownloadOwnerSetting } from "./resourcedownloadownersetting";
/**
 * Attributes that define an Amazon SageMaker machine learning resource.
**/
export declare class SageMakerMachineLearningModelResourceData extends SpeakeasyBase {
    destinationPath?: string;
    ownerSetting?: ResourceDownloadOwnerSetting;
    sageMakerJobArn?: string;
}
