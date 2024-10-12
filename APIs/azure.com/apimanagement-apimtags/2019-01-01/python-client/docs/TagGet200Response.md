# TagGet200Response

Tag Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TagListByService200ResponseValueInnerProperties**](TagListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tag_get200_response import TagGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TagGet200Response from a JSON string
tag_get200_response_instance = TagGet200Response.from_json(json)
# print the JSON string representation of the object
print(TagGet200Response.to_json())

# convert the object into a dict
tag_get200_response_dict = tag_get200_response_instance.to_dict()
# create an instance of TagGet200Response from a dict
tag_get200_response_from_dict = TagGet200Response.from_dict(tag_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


