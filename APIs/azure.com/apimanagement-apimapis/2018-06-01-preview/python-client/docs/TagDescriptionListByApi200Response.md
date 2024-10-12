# TagDescriptionListByApi200Response

Paged TagDescription list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[TagDescriptionListByApi200ResponseValueInner]**](TagDescriptionListByApi200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.tag_description_list_by_api200_response import TagDescriptionListByApi200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TagDescriptionListByApi200Response from a JSON string
tag_description_list_by_api200_response_instance = TagDescriptionListByApi200Response.from_json(json)
# print the JSON string representation of the object
print(TagDescriptionListByApi200Response.to_json())

# convert the object into a dict
tag_description_list_by_api200_response_dict = tag_description_list_by_api200_response_instance.to_dict()
# create an instance of TagDescriptionListByApi200Response from a dict
tag_description_list_by_api200_response_from_dict = TagDescriptionListByApi200Response.from_dict(tag_description_list_by_api200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


