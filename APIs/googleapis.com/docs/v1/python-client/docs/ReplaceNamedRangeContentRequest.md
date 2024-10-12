# ReplaceNamedRangeContentRequest

Replaces the contents of the specified NamedRange or NamedRanges with the given replacement content. Note that an individual NamedRange may consist of multiple discontinuous ranges. In this case, only the content in the first range will be replaced. The other ranges and their content will be deleted. In cases where replacing or deleting any ranges would result in an invalid document structure, a 400 bad request error is returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**named_range_id** | **str** | The ID of the named range whose content will be replaced. If there is no named range with the given ID a 400 bad request error is returned. | [optional] 
**named_range_name** | **str** | The name of the NamedRanges whose content will be replaced. If there are multiple named ranges with the given name, then the content of each one will be replaced. If there are no named ranges with the given name, then the request will be a no-op. | [optional] 
**text** | **str** | Replaces the content of the specified named range(s) with the given text. | [optional] 

## Example

```python
from openapi_client.models.replace_named_range_content_request import ReplaceNamedRangeContentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceNamedRangeContentRequest from a JSON string
replace_named_range_content_request_instance = ReplaceNamedRangeContentRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceNamedRangeContentRequest.to_json())

# convert the object into a dict
replace_named_range_content_request_dict = replace_named_range_content_request_instance.to_dict()
# create an instance of ReplaceNamedRangeContentRequest from a dict
replace_named_range_content_request_from_dict = ReplaceNamedRangeContentRequest.from_dict(replace_named_range_content_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


