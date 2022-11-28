import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";



// DatasetImportJobSummary
/** 
 * Provides a summary of the dataset import job properties used in the <a>ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a>DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>.
**/
export class DatasetImportJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource?: DataSource;

  @SpeakeasyMetadata({ data: "json, name=DatasetImportJobArn" })
  datasetImportJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetImportJobName" })
  datasetImportJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
