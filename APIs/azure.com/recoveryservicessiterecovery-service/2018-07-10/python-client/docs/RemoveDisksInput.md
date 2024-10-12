# RemoveDisksInput

Input for remove disk(s) operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RemoveDisksInputProperties**](RemoveDisksInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.remove_disks_input import RemoveDisksInput

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveDisksInput from a JSON string
remove_disks_input_instance = RemoveDisksInput.from_json(json)
# print the JSON string representation of the object
print(RemoveDisksInput.to_json())

# convert the object into a dict
remove_disks_input_dict = remove_disks_input_instance.to_dict()
# create an instance of RemoveDisksInput from a dict
remove_disks_input_from_dict = RemoveDisksInput.from_dict(remove_disks_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


