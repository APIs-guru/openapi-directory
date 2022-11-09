import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dataset
/** 
 * A collection of data for an identity pool. An identity pool can have multiple datasets. A dataset is per identity and can be general or associated with a particular entity in an application (like a saved game). Datasets are automatically created if they don't exist. Data is synced by dataset, and a dataset can hold up to 1MB of key-value pairs.
**/
export class Dataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=DataStorage" })
  dataStorage?: number;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: string;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=NumRecords" })
  numRecords?: number;
}
