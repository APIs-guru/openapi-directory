import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IotSiteWiseCustomerManagedDatastoreS3Storage } from "./iotsitewisecustomermanageddatastores3storage";



// DatastoreIotSiteWiseMultiLayerStorage
/** 
 *  Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created. 
**/
export class DatastoreIotSiteWiseMultiLayerStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedS3Storage" })
  customerManagedS3Storage: IotSiteWiseCustomerManagedDatastoreS3Storage;
}
