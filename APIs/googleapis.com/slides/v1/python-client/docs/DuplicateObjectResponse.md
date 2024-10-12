# DuplicateObjectResponse

The response of duplicating an object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The ID of the new duplicate object. | [optional] 

## Example

```python
from openapi_client.models.duplicate_object_response import DuplicateObjectResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DuplicateObjectResponse from a JSON string
duplicate_object_response_instance = DuplicateObjectResponse.from_json(json)
# print the JSON string representation of the object
print(DuplicateObjectResponse.to_json())

# convert the object into a dict
duplicate_object_response_dict = duplicate_object_response_instance.to_dict()
# create an instance of DuplicateObjectResponse from a dict
duplicate_object_response_from_dict = DuplicateObjectResponse.from_dict(duplicate_object_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


