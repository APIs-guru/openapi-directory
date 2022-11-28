import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedDatastoreS3Storage } from "./customermanageddatastores3storage";
import { DatastoreIotSiteWiseMultiLayerStorage } from "./datastoreiotsitewisemultilayerstorage";



// DatastoreStorage
/** 
 * Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. 
**/
export class DatastoreStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedS3" })
  customerManagedS3?: CustomerManagedDatastoreS3Storage;

  @SpeakeasyMetadata({ data: "json, name=iotSiteWiseMultiLayerStorage" })
  iotSiteWiseMultiLayerStorage?: DatastoreIotSiteWiseMultiLayerStorage;

  @SpeakeasyMetadata({ data: "json, name=serviceManagedS3" })
  serviceManagedS3?: Map<string, any>;
}
