# TagDescriptionGet200Response

Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TagDescriptionListByApi200ResponseValueInnerProperties**](TagDescriptionListByApi200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tag_description_get200_response import TagDescriptionGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TagDescriptionGet200Response from a JSON string
tag_description_get200_response_instance = TagDescriptionGet200Response.from_json(json)
# print the JSON string representation of the object
print(TagDescriptionGet200Response.to_json())

# convert the object into a dict
tag_description_get200_response_dict = tag_description_get200_response_instance.to_dict()
# create an instance of TagDescriptionGet200Response from a dict
tag_description_get200_response_from_dict = TagDescriptionGet200Response.from_dict(tag_description_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


