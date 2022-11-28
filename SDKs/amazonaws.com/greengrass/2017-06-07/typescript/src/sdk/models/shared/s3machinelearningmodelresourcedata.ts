import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceDownloadOwnerSetting } from "./resourcedownloadownersetting";



// S3MachineLearningModelResourceData
/** 
 * Attributes that define an Amazon S3 machine learning resource.
**/
export class S3MachineLearningModelResourceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationPath" })
  destinationPath?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerSetting" })
  ownerSetting?: ResourceDownloadOwnerSetting;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
