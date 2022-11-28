import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomerManagedDatastoreS3Storage
/** 
 * S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created. 
**/
export class CustomerManagedDatastoreS3Storage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "json, name=keyPrefix" })
  keyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
