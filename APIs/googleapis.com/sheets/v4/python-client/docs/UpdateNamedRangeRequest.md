# UpdateNamedRangeRequest

Updates properties of the named range with the specified namedRangeId.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;namedRange&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 
**named_range** | [**NamedRange**](NamedRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_named_range_request import UpdateNamedRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNamedRangeRequest from a JSON string
update_named_range_request_instance = UpdateNamedRangeRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNamedRangeRequest.to_json())

# convert the object into a dict
update_named_range_request_dict = update_named_range_request_instance.to_dict()
# create an instance of UpdateNamedRangeRequest from a dict
update_named_range_request_from_dict = UpdateNamedRangeRequest.from_dict(update_named_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


