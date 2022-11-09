import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceDownloadOwnerSetting } from "./resourcedownloadownersetting";


// S3MachineLearningModelResourceData
/** 
 * Attributes that define an Amazon S3 machine learning resource.
**/
export class S3MachineLearningModelResourceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationPath" })
  destinationPath?: string;

  @Metadata({ data: "json, name=OwnerSetting" })
  ownerSetting?: ResourceDownloadOwnerSetting;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
