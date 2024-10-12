# AddProtectedRangeRequest

Adds a new protected range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protected_range** | [**ProtectedRange**](ProtectedRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_protected_range_request import AddProtectedRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddProtectedRangeRequest from a JSON string
add_protected_range_request_instance = AddProtectedRangeRequest.from_json(json)
# print the JSON string representation of the object
print(AddProtectedRangeRequest.to_json())

# convert the object into a dict
add_protected_range_request_dict = add_protected_range_request_instance.to_dict()
# create an instance of AddProtectedRangeRequest from a dict
add_protected_range_request_from_dict = AddProtectedRangeRequest.from_dict(add_protected_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


