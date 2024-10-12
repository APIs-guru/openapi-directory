# CreateNamedRangeResponse

The result of creating a named range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**named_range_id** | **str** | The ID of the created named range. | [optional] 

## Example

```python
from openapi_client.models.create_named_range_response import CreateNamedRangeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNamedRangeResponse from a JSON string
create_named_range_response_instance = CreateNamedRangeResponse.from_json(json)
# print the JSON string representation of the object
print(CreateNamedRangeResponse.to_json())

# convert the object into a dict
create_named_range_response_dict = create_named_range_response_instance.to_dict()
# create an instance of CreateNamedRangeResponse from a dict
create_named_range_response_from_dict = CreateNamedRangeResponse.from_dict(create_named_range_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


