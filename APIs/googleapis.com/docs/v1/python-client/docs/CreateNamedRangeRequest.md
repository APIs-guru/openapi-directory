# CreateNamedRangeRequest

Creates a NamedRange referencing the given range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the NamedRange. Names do not need to be unique. Names must be at least 1 character and no more than 256 characters, measured in UTF-16 code units. | [optional] 
**range** | [**Range**](Range.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_named_range_request import CreateNamedRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNamedRangeRequest from a JSON string
create_named_range_request_instance = CreateNamedRangeRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNamedRangeRequest.to_json())

# convert the object into a dict
create_named_range_request_dict = create_named_range_request_instance.to_dict()
# create an instance of CreateNamedRangeRequest from a dict
create_named_range_request_from_dict = CreateNamedRangeRequest.from_dict(create_named_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


