# BrowsersListResponse

Browser List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browsers** | [**List[Browser]**](Browser.md) | Browser collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#browsersListResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.browsers_list_response import BrowsersListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BrowsersListResponse from a JSON string
browsers_list_response_instance = BrowsersListResponse.from_json(json)
# print the JSON string representation of the object
print(BrowsersListResponse.to_json())

# convert the object into a dict
browsers_list_response_dict = browsers_list_response_instance.to_dict()
# create an instance of BrowsersListResponse from a dict
browsers_list_response_from_dict = BrowsersListResponse.from_dict(browsers_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


