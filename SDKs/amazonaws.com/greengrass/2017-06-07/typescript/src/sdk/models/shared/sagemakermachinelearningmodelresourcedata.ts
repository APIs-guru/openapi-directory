import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceDownloadOwnerSetting } from "./resourcedownloadownersetting";


// SageMakerMachineLearningModelResourceData
/** 
 * Attributes that define an Amazon SageMaker machine learning resource.
**/
export class SageMakerMachineLearningModelResourceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationPath" })
  destinationPath?: string;

  @Metadata({ data: "json, name=OwnerSetting" })
  ownerSetting?: ResourceDownloadOwnerSetting;

  @Metadata({ data: "json, name=SageMakerJobArn" })
  sageMakerJobArn?: string;
}
