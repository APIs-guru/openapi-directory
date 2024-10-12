# ExtrasCustomLinksList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[CustomLink]**](CustomLink.md) |  | 

## Example

```python
from openapi_client.models.extras_custom_links_list200_response import ExtrasCustomLinksList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExtrasCustomLinksList200Response from a JSON string
extras_custom_links_list200_response_instance = ExtrasCustomLinksList200Response.from_json(json)
# print the JSON string representation of the object
print(ExtrasCustomLinksList200Response.to_json())

# convert the object into a dict
extras_custom_links_list200_response_dict = extras_custom_links_list200_response_instance.to_dict()
# create an instance of ExtrasCustomLinksList200Response from a dict
extras_custom_links_list200_response_from_dict = ExtrasCustomLinksList200Response.from_dict(extras_custom_links_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


