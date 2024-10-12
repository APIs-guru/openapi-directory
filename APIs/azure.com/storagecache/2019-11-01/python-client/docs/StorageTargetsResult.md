# StorageTargetsResult

A list of Storage Targets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of Storage Targets. | [optional] 
**value** | [**List[StorageTarget]**](StorageTarget.md) | The list of Storage Targets defined for the Cache. | [optional] 

## Example

```python
from openapi_client.models.storage_targets_result import StorageTargetsResult

# TODO update the JSON string below
json = "{}"
# create an instance of StorageTargetsResult from a JSON string
storage_targets_result_instance = StorageTargetsResult.from_json(json)
# print the JSON string representation of the object
print(StorageTargetsResult.to_json())

# convert the object into a dict
storage_targets_result_dict = storage_targets_result_instance.to_dict()
# create an instance of StorageTargetsResult from a dict
storage_targets_result_from_dict = StorageTargetsResult.from_dict(storage_targets_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


