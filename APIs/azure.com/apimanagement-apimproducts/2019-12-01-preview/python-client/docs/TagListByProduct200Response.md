# TagListByProduct200Response

Paged Tag list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[TagListByProduct200ResponseValueInner]**](TagListByProduct200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.tag_list_by_product200_response import TagListByProduct200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TagListByProduct200Response from a JSON string
tag_list_by_product200_response_instance = TagListByProduct200Response.from_json(json)
# print the JSON string representation of the object
print(TagListByProduct200Response.to_json())

# convert the object into a dict
tag_list_by_product200_response_dict = tag_list_by_product200_response_instance.to_dict()
# create an instance of TagListByProduct200Response from a dict
tag_list_by_product200_response_from_dict = TagListByProduct200Response.from_dict(tag_list_by_product200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


