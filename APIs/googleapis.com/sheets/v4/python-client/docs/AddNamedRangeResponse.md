# AddNamedRangeResponse

The result of adding a named range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**named_range** | [**NamedRange**](NamedRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_named_range_response import AddNamedRangeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddNamedRangeResponse from a JSON string
add_named_range_response_instance = AddNamedRangeResponse.from_json(json)
# print the JSON string representation of the object
print(AddNamedRangeResponse.to_json())

# convert the object into a dict
add_named_range_response_dict = add_named_range_response_instance.to_dict()
# create an instance of AddNamedRangeResponse from a dict
add_named_range_response_from_dict = AddNamedRangeResponse.from_dict(add_named_range_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


