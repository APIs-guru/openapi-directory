import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IotSiteWiseCustomerManagedDatastoreS3Storage } from "./iotsitewisecustomermanageddatastores3storage";
/**
 *  Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.
**/
export declare class DatastoreIotSiteWiseMultiLayerStorage extends SpeakeasyBase {
    customerManagedS3Storage: IotSiteWiseCustomerManagedDatastoreS3Storage;
}
