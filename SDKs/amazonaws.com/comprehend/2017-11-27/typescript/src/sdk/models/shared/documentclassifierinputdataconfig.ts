import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AugmentedManifestsListItem } from "./augmentedmanifestslistitem";
import { DocumentClassifierDataFormatEnum } from "./documentclassifierdataformatenum";



// DocumentClassifierInputDataConfig
/** 
 * <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p>
**/
export class DocumentClassifierInputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AugmentedManifests", elemType: AugmentedManifestsListItem })
  augmentedManifests?: AugmentedManifestsListItem[];

  @SpeakeasyMetadata({ data: "json, name=DataFormat" })
  dataFormat?: DocumentClassifierDataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=LabelDelimiter" })
  labelDelimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
