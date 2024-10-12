# BatchAccountProperties

Account specific properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_endpoint** | **str** | The endpoint used by this account to interact with the Batch services. | [optional] [readonly] 
**active_job_and_job_schedule_quota** | **int** | The active job and job schedule quota for this Batch account. | 
**auto_storage** | [**AutoStorageProperties**](AutoStorageProperties.md) |  | [optional] 
**core_quota** | **int** | The core quota for this Batch account. | 
**pool_quota** | **int** | The pool quota for this Batch account. | 
**provisioning_state** | **str** | The provisioned state of the resource | [optional] 

## Example

```python
from openapi_client.models.batch_account_properties import BatchAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAccountProperties from a JSON string
batch_account_properties_instance = BatchAccountProperties.from_json(json)
# print the JSON string representation of the object
print(BatchAccountProperties.to_json())

# convert the object into a dict
batch_account_properties_dict = batch_account_properties_instance.to_dict()
# create an instance of BatchAccountProperties from a dict
batch_account_properties_from_dict = BatchAccountProperties.from_dict(batch_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


