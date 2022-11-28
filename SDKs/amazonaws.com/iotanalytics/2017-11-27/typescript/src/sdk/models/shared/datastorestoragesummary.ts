import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedDatastoreS3StorageSummary } from "./customermanageddatastores3storagesummary";
import { DatastoreIotSiteWiseMultiLayerStorageSummary } from "./datastoreiotsitewisemultilayerstoragesummary";



// DatastoreStorageSummary
/** 
 * Contains information about your data store.
**/
export class DatastoreStorageSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedS3" })
  customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;

  @SpeakeasyMetadata({ data: "json, name=iotSiteWiseMultiLayerStorage" })
  iotSiteWiseMultiLayerStorage?: DatastoreIotSiteWiseMultiLayerStorageSummary;

  @SpeakeasyMetadata({ data: "json, name=serviceManagedS3" })
  serviceManagedS3?: Map<string, any>;
}
