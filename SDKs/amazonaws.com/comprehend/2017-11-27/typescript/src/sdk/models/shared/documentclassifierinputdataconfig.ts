import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AugmentedManifestsListItem } from "./augmentedmanifestslistitem";
import { DocumentClassifierDataFormatEnum } from "./documentclassifierdataformatenum";


// DocumentClassifierInputDataConfig
/** 
 * <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p>
**/
export class DocumentClassifierInputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AugmentedManifests", elemType: shared.AugmentedManifestsListItem })
  augmentedManifests?: AugmentedManifestsListItem[];

  @Metadata({ data: "json, name=DataFormat" })
  dataFormat?: DocumentClassifierDataFormatEnum;

  @Metadata({ data: "json, name=LabelDelimiter" })
  labelDelimiter?: string;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
