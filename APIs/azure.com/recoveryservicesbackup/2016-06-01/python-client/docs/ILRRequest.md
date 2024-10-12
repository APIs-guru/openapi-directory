# ILRRequest

Parameters to restore file or folders API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** | This property is used as the discriminator for deciding the specific types in the polymorphic chain of types. | [optional] 

## Example

```python
from openapi_client.models.ilr_request import ILRRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ILRRequest from a JSON string
ilr_request_instance = ILRRequest.from_json(json)
# print the JSON string representation of the object
print(ILRRequest.to_json())

# convert the object into a dict
ilr_request_dict = ilr_request_instance.to_dict()
# create an instance of ILRRequest from a dict
ilr_request_from_dict = ILRRequest.from_dict(ilr_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


