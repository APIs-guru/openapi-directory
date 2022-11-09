import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerManagedDatastoreS3StorageSummary
/** 
 * Contains information about the data store that you manage.
**/
export class CustomerManagedDatastoreS3StorageSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=keyPrefix" })
  keyPrefix?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
