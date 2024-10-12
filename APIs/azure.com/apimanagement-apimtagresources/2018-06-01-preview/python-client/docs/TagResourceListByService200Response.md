# TagResourceListByService200Response

Paged Tag list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[TagResourceListByService200ResponseValueInner]**](TagResourceListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.tag_resource_list_by_service200_response import TagResourceListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TagResourceListByService200Response from a JSON string
tag_resource_list_by_service200_response_instance = TagResourceListByService200Response.from_json(json)
# print the JSON string representation of the object
print(TagResourceListByService200Response.to_json())

# convert the object into a dict
tag_resource_list_by_service200_response_dict = tag_resource_list_by_service200_response_instance.to_dict()
# create an instance of TagResourceListByService200Response from a dict
tag_resource_list_by_service200_response_from_dict = TagResourceListByService200Response.from_dict(tag_resource_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


