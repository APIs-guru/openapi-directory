# ListTemplatesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 
**template** | [**List[CustomTemplate]**](CustomTemplate.md) | All GTM Custom Templates of a GTM Container. | [optional] 

## Example

```python
from openapi_client.models.list_templates_response import ListTemplatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTemplatesResponse from a JSON string
list_templates_response_instance = ListTemplatesResponse.from_json(json)
# print the JSON string representation of the object
print(ListTemplatesResponse.to_json())

# convert the object into a dict
list_templates_response_dict = list_templates_response_instance.to_dict()
# create an instance of ListTemplatesResponse from a dict
list_templates_response_from_dict = ListTemplatesResponse.from_dict(list_templates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


