# Restore

A deleted object was restored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of restore action taken. | [optional] 

## Example

```python
from openapi_client.models.restore import Restore

# TODO update the JSON string below
json = "{}"
# create an instance of Restore from a JSON string
restore_instance = Restore.from_json(json)
# print the JSON string representation of the object
print(Restore.to_json())

# convert the object into a dict
restore_dict = restore_instance.to_dict()
# create an instance of Restore from a dict
restore_from_dict = Restore.from_dict(restore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


