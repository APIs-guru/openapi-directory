import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatasetGroupSummary
/** 
 * Provides a summary of the dataset group properties used in the <a>ListDatasetGroups</a> operation. To get the complete set of properties, call the <a>DescribeDatasetGroup</a> operation, and provide the <code>DatasetGroupArn</code>.
**/
export class DatasetGroupSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn?: string;

  @Metadata({ data: "json, name=DatasetGroupName" })
  datasetGroupName?: string;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;
}
