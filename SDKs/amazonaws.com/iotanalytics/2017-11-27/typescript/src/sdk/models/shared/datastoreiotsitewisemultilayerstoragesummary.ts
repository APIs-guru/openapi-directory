import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IotSiteWiseCustomerManagedDatastoreS3StorageSummary } from "./iotsitewisecustomermanageddatastores3storagesummary";


// DatastoreIotSiteWiseMultiLayerStorageSummary
/** 
 *  Contains information about the data store that you manage, which stores data used by IoT SiteWise. 
**/
export class DatastoreIotSiteWiseMultiLayerStorageSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerManagedS3Storage" })
  customerManagedS3Storage?: IotSiteWiseCustomerManagedDatastoreS3StorageSummary;
}
