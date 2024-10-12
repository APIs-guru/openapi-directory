# ListApisResponse

Response message for ListApis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apis** | [**List[Api]**](Api.md) | The APIs from the specified publisher. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_apis_response import ListApisResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListApisResponse from a JSON string
list_apis_response_instance = ListApisResponse.from_json(json)
# print the JSON string representation of the object
print(ListApisResponse.to_json())

# convert the object into a dict
list_apis_response_dict = list_apis_response_instance.to_dict()
# create an instance of ListApisResponse from a dict
list_apis_response_from_dict = ListApisResponse.from_dict(list_apis_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


