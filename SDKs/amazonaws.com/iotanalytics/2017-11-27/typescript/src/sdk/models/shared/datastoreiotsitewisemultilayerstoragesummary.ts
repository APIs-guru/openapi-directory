import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IotSiteWiseCustomerManagedDatastoreS3StorageSummary } from "./iotsitewisecustomermanageddatastores3storagesummary";



// DatastoreIotSiteWiseMultiLayerStorageSummary
/** 
 *  Contains information about the data store that you manage, which stores data used by IoT SiteWise. 
**/
export class DatastoreIotSiteWiseMultiLayerStorageSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedS3Storage" })
  customerManagedS3Storage?: IotSiteWiseCustomerManagedDatastoreS3StorageSummary;
}
