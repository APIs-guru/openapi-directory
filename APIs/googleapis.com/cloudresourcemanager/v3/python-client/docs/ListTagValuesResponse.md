# ListTagValuesResponse

The ListTagValues response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A pagination token returned from a previous call to &#x60;ListTagValues&#x60; that indicates from where listing should continue. This is currently not used, but the server may at any point start supplying a valid token. | [optional] 
**tag_values** | [**List[TagValue]**](TagValue.md) | A possibly paginated list of TagValues that are direct descendants of the specified parent TagKey. | [optional] 

## Example

```python
from openapi_client.models.list_tag_values_response import ListTagValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTagValuesResponse from a JSON string
list_tag_values_response_instance = ListTagValuesResponse.from_json(json)
# print the JSON string representation of the object
print(ListTagValuesResponse.to_json())

# convert the object into a dict
list_tag_values_response_dict = list_tag_values_response_instance.to_dict()
# create an instance of ListTagValuesResponse from a dict
list_tag_values_response_from_dict = ListTagValuesResponse.from_dict(list_tag_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


