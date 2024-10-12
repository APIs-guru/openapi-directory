# TagGetByProduct200Response

Tag Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TagListByProduct200ResponseValueInnerProperties**](TagListByProduct200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tag_get_by_product200_response import TagGetByProduct200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TagGetByProduct200Response from a JSON string
tag_get_by_product200_response_instance = TagGetByProduct200Response.from_json(json)
# print the JSON string representation of the object
print(TagGetByProduct200Response.to_json())

# convert the object into a dict
tag_get_by_product200_response_dict = tag_get_by_product200_response_instance.to_dict()
# create an instance of TagGetByProduct200Response from a dict
tag_get_by_product200_response_from_dict = TagGetByProduct200Response.from_dict(tag_get_by_product200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


