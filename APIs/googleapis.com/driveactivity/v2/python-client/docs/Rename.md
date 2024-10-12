# Rename

An object was renamed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_title** | **str** | The new title of the drive object. | [optional] 
**old_title** | **str** | The previous title of the drive object. | [optional] 

## Example

```python
from openapi_client.models.rename import Rename

# TODO update the JSON string below
json = "{}"
# create an instance of Rename from a JSON string
rename_instance = Rename.from_json(json)
# print the JSON string representation of the object
print(Rename.to_json())

# convert the object into a dict
rename_dict = rename_instance.to_dict()
# create an instance of Rename from a dict
rename_from_dict = Rename.from_dict(rename_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


