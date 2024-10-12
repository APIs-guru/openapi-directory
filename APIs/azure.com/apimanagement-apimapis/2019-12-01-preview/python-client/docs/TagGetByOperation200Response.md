# TagGetByOperation200Response

Tag Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TagListByOperation200ResponseValueInnerProperties**](TagListByOperation200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tag_get_by_operation200_response import TagGetByOperation200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TagGetByOperation200Response from a JSON string
tag_get_by_operation200_response_instance = TagGetByOperation200Response.from_json(json)
# print the JSON string representation of the object
print(TagGetByOperation200Response.to_json())

# convert the object into a dict
tag_get_by_operation200_response_dict = tag_get_by_operation200_response_instance.to_dict()
# create an instance of TagGetByOperation200Response from a dict
tag_get_by_operation200_response_from_dict = TagGetByOperation200Response.from_dict(tag_get_by_operation200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


