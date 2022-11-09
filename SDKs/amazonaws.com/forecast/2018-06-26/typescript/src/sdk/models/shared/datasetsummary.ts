import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetTypeEnum } from "./datasettypeenum";
import { DomainEnum } from "./domainenum";


// DatasetSummary
/** 
 * Provides a summary of the dataset properties used in the <a>ListDatasets</a> operation. To get the complete set of properties, call the <a>DescribeDataset</a> operation, and provide the <code>DatasetArn</code>.
**/
export class DatasetSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @Metadata({ data: "json, name=DatasetType" })
  datasetType?: DatasetTypeEnum;

  @Metadata({ data: "json, name=Domain" })
  domain?: DomainEnum;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;
}
