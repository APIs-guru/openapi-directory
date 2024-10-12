# AddProtectedRangeResponse

The result of adding a new protected range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protected_range** | [**ProtectedRange**](ProtectedRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_protected_range_response import AddProtectedRangeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddProtectedRangeResponse from a JSON string
add_protected_range_response_instance = AddProtectedRangeResponse.from_json(json)
# print the JSON string representation of the object
print(AddProtectedRangeResponse.to_json())

# convert the object into a dict
add_protected_range_response_dict = add_protected_range_response_instance.to_dict()
# create an instance of AddProtectedRangeResponse from a dict
add_protected_range_response_from_dict = AddProtectedRangeResponse.from_dict(add_protected_range_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


