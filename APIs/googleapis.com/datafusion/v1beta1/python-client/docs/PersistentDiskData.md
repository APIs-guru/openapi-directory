# PersistentDiskData

Persistent Disk service-specific Data. Contains information that may not be appropriate for the generic DRZ Augmented View. This currently includes LSV Colossus Roots and GCS Buckets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cfs_roots** | **List[str]** | Path to Colossus root for an LSV. NOTE: Unlike &#x60;cr_ti_guris&#x60; and &#x60;cr_ti_prefixes&#x60;, the field &#x60;cfs_roots&#x60; below does not need to be a GUri or GUri prefix. It can simply be any valid CFS or CFS2 Path. The DRZ KR8 SIG has more details overall, but generally the &#x60;cfs_roots&#x60; provided here should be scoped to an individual Persistent Disk. An example for a PD Disk with a disk ID 3277719120423414466, follows: * &#x60;cr_ti_guris&#x60; could be ‘/cfs2/pj/pd-cloud-prod’ as this is a valid GUri present in the DG KB and contains enough information to perform location monitoring and scope ownership of the Production Object. * &#x60;cfs_roots&#x60; would be: ‘/cfs2/pj/pd-cloud-staging/lsv000001234@/ lsv/projects~773365403387~zones~2700~disks~3277719120423414466 ~bank-blue-careful-3526-lsv00054DB1B7254BA3/’ as this allows us to enumerate the files on CFS2 that belong to an individual Disk. | [optional] 
**gcs_bucket_names** | **List[str]** | The GCS Buckets that back this snapshot or image. This is required as &#x60;cr_ti_prefixes&#x60; and &#x60;cr_ti_guris&#x60; only accept TI resources. This should be the globally unique bucket name. | [optional] 

## Example

```python
from openapi_client.models.persistent_disk_data import PersistentDiskData

# TODO update the JSON string below
json = "{}"
# create an instance of PersistentDiskData from a JSON string
persistent_disk_data_instance = PersistentDiskData.from_json(json)
# print the JSON string representation of the object
print(PersistentDiskData.to_json())

# convert the object into a dict
persistent_disk_data_dict = persistent_disk_data_instance.to_dict()
# create an instance of PersistentDiskData from a dict
persistent_disk_data_from_dict = PersistentDiskData.from_dict(persistent_disk_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


