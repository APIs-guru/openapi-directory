import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceDownloadOwnerSetting } from "./resourcedownloadownersetting";



// SageMakerMachineLearningModelResourceData
/** 
 * Attributes that define an Amazon SageMaker machine learning resource.
**/
export class SageMakerMachineLearningModelResourceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationPath" })
  destinationPath?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerSetting" })
  ownerSetting?: ResourceDownloadOwnerSetting;

  @SpeakeasyMetadata({ data: "json, name=SageMakerJobArn" })
  sageMakerJobArn?: string;
}
