# ErrorDeleteCounter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | [optional] 
**attachments_deleted** | **int** |  | [optional] 
**blobs_failed** | **int** |  | [optional] 
**blobs_succeeded** | **int** |  | [optional] 
**error_group_id** | **str** |  | [optional] 
**error_id** | **str** |  | [optional] 
**errors_deleted** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.error_delete_counter import ErrorDeleteCounter

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDeleteCounter from a JSON string
error_delete_counter_instance = ErrorDeleteCounter.from_json(json)
# print the JSON string representation of the object
print(ErrorDeleteCounter.to_json())

# convert the object into a dict
error_delete_counter_dict = error_delete_counter_instance.to_dict()
# create an instance of ErrorDeleteCounter from a dict
error_delete_counter_from_dict = ErrorDeleteCounter.from_dict(error_delete_counter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


