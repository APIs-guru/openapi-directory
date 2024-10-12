# Copy

An object was created by copying an existing object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_object** | [**TargetReference**](TargetReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.copy import Copy

# TODO update the JSON string below
json = "{}"
# create an instance of Copy from a JSON string
copy_instance = Copy.from_json(json)
# print the JSON string representation of the object
print(Copy.to_json())

# convert the object into a dict
copy_dict = copy_instance.to_dict()
# create an instance of Copy from a dict
copy_from_dict = Copy.from_dict(copy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


