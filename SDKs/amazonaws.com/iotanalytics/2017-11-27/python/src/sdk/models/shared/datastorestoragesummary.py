from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import customermanageddatastores3storagesummary
from . import datastoreiotsitewisemultilayerstoragesummary


@dataclass_json
@dataclass
class DatastoreStorageSummary:
    customer_managed_s3: Optional[customermanageddatastores3storagesummary.CustomerManagedDatastoreS3StorageSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerManagedS3' }})
    iot_site_wise_multi_layer_storage: Optional[datastoreiotsitewisemultilayerstoragesummary.DatastoreIotSiteWiseMultiLayerStorageSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotSiteWiseMultiLayerStorage' }})
    service_managed_s3: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceManagedS3' }})
    
