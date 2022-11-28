import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IotSiteWiseCustomerManagedDatastoreS3StorageSummary
/** 
 *  Contains information about the data store that you manage, which stores data used by IoT SiteWise. 
**/
export class IotSiteWiseCustomerManagedDatastoreS3StorageSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=keyPrefix" })
  keyPrefix?: string;
}
