import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetTypeEnum } from "./datasettypeenum";
import { DomainEnum } from "./domainenum";



// DatasetSummary
/** 
 * Provides a summary of the dataset properties used in the <a>ListDatasets</a> operation. To get the complete set of properties, call the <a>DescribeDataset</a> operation, and provide the <code>DatasetArn</code>.
**/
export class DatasetSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetType" })
  datasetType?: DatasetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: DomainEnum;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;
}
