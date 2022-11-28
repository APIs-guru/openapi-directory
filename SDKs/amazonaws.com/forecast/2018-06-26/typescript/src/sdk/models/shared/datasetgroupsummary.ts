import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatasetGroupSummary
/** 
 * Provides a summary of the dataset group properties used in the <a>ListDatasetGroups</a> operation. To get the complete set of properties, call the <a>DescribeDatasetGroup</a> operation, and provide the <code>DatasetGroupArn</code>.
**/
export class DatasetGroupSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatasetGroupArn" })
  datasetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetGroupName" })
  datasetGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;
}
