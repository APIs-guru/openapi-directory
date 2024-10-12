# TagResourceListByServiceDefaultResponseErrorDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.tag_resource_list_by_service_default_response_error_details_inner import TagResourceListByServiceDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TagResourceListByServiceDefaultResponseErrorDetailsInner from a JSON string
tag_resource_list_by_service_default_response_error_details_inner_instance = TagResourceListByServiceDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(TagResourceListByServiceDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
tag_resource_list_by_service_default_response_error_details_inner_dict = tag_resource_list_by_service_default_response_error_details_inner_instance.to_dict()
# create an instance of TagResourceListByServiceDefaultResponseErrorDetailsInner from a dict
tag_resource_list_by_service_default_response_error_details_inner_from_dict = TagResourceListByServiceDefaultResponseErrorDetailsInner.from_dict(tag_resource_list_by_service_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


