# TagListByOperationDefaultResponseErrorDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.tag_list_by_operation_default_response_error_details_inner import TagListByOperationDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TagListByOperationDefaultResponseErrorDetailsInner from a JSON string
tag_list_by_operation_default_response_error_details_inner_instance = TagListByOperationDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(TagListByOperationDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
tag_list_by_operation_default_response_error_details_inner_dict = tag_list_by_operation_default_response_error_details_inner_instance.to_dict()
# create an instance of TagListByOperationDefaultResponseErrorDetailsInner from a dict
tag_list_by_operation_default_response_error_details_inner_from_dict = TagListByOperationDefaultResponseErrorDetailsInner.from_dict(tag_list_by_operation_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


