import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSource } from "./datasource";


// DatasetImportJobSummary
/** 
 * Provides a summary of the dataset import job properties used in the <a>ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a>DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>.
**/
export class DatasetImportJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DataSource" })
  dataSource?: DataSource;

  @Metadata({ data: "json, name=DatasetImportJobArn" })
  datasetImportJobArn?: string;

  @Metadata({ data: "json, name=DatasetImportJobName" })
  datasetImportJobName?: string;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
