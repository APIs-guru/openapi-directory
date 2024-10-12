# AddNamedRangeRequest

Adds a named range to the spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**named_range** | [**NamedRange**](NamedRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_named_range_request import AddNamedRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddNamedRangeRequest from a JSON string
add_named_range_request_instance = AddNamedRangeRequest.from_json(json)
# print the JSON string representation of the object
print(AddNamedRangeRequest.to_json())

# convert the object into a dict
add_named_range_request_dict = add_named_range_request_instance.to_dict()
# create an instance of AddNamedRangeRequest from a dict
add_named_range_request_from_dict = AddNamedRangeRequest.from_dict(add_named_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


