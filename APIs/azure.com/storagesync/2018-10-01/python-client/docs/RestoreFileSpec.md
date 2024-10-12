# RestoreFileSpec

Restore file spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isdir** | **bool** | Restore file spec isdir | [optional] [readonly] 
**path** | **str** | Restore file spec path | [optional] 

## Example

```python
from openapi_client.models.restore_file_spec import RestoreFileSpec

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreFileSpec from a JSON string
restore_file_spec_instance = RestoreFileSpec.from_json(json)
# print the JSON string representation of the object
print(RestoreFileSpec.to_json())

# convert the object into a dict
restore_file_spec_dict = restore_file_spec_instance.to_dict()
# create an instance of RestoreFileSpec from a dict
restore_file_spec_from_dict = RestoreFileSpec.from_dict(restore_file_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


