import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IotSiteWiseCustomerManagedDatastoreS3StorageSummary
/** 
 *  Contains information about the data store that you manage, which stores data used by IoT SiteWise. 
**/
export class IotSiteWiseCustomerManagedDatastoreS3StorageSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=keyPrefix" })
  keyPrefix?: string;
}
