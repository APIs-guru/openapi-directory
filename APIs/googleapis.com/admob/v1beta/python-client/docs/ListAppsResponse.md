# ListAppsResponse

Response for the apps list request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | [**List[App]**](App.md) | The resulting apps for the requested account. | [optional] 
**next_page_token** | **str** | If not empty, indicates that there may be more apps for the request; this value should be passed in a new &#x60;ListAppsRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.list_apps_response import ListAppsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAppsResponse from a JSON string
list_apps_response_instance = ListAppsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAppsResponse.to_json())

# convert the object into a dict
list_apps_response_dict = list_apps_response_instance.to_dict()
# create an instance of ListAppsResponse from a dict
list_apps_response_from_dict = ListAppsResponse.from_dict(list_apps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


