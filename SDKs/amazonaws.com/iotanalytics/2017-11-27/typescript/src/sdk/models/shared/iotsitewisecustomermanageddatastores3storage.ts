import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IotSiteWiseCustomerManagedDatastoreS3Storage
/** 
 *  Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created. 
**/
export class IotSiteWiseCustomerManagedDatastoreS3Storage extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket: string;

  @Metadata({ data: "json, name=keyPrefix" })
  keyPrefix?: string;
}
