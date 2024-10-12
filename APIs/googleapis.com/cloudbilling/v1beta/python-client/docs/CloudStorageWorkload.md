# CloudStorageWorkload

Specifies usage of Cloud Storage resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_retrieval** | [**Usage**](Usage.md) |  | [optional] 
**data_stored** | [**Usage**](Usage.md) |  | [optional] 
**dual_region** | [**DualRegional**](DualRegional.md) |  | [optional] 
**multi_region** | [**MultiRegional**](MultiRegional.md) |  | [optional] 
**operation_a** | [**Usage**](Usage.md) |  | [optional] 
**operation_b** | [**Usage**](Usage.md) |  | [optional] 
**region** | [**Regional**](Regional.md) |  | [optional] 
**storage_class** | **str** | The [storage class](https://cloud.google.com/storage/docs/storage-classes#classes) of the data and operation. For example: \&quot;standard\&quot; and \&quot;nearline\&quot;. | [optional] 

## Example

```python
from openapi_client.models.cloud_storage_workload import CloudStorageWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of CloudStorageWorkload from a JSON string
cloud_storage_workload_instance = CloudStorageWorkload.from_json(json)
# print the JSON string representation of the object
print(CloudStorageWorkload.to_json())

# convert the object into a dict
cloud_storage_workload_dict = cloud_storage_workload_instance.to_dict()
# create an instance of CloudStorageWorkload from a dict
cloud_storage_workload_from_dict = CloudStorageWorkload.from_dict(cloud_storage_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


