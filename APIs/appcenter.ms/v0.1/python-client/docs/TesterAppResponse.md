# TesterAppResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the app | [optional] 
**display_name** | **str** | The display name of the app | 
**icon_source** | **str** | The string representation of the source of the app&#39;s icon | [optional] 
**icon_url** | **str** | The string representation of the URL pointing to the app&#39;s icon | [optional] 
**id** | **str** | The unique ID (UUID) of the app | 
**name** | **str** | The name of the app used in URLs | 
**os** | **str** | The OS the app will be running on | 
**owner** | [**AppsList200ResponseInnerAllOfOwner**](AppsList200ResponseInnerAllOfOwner.md) |  | 
**release_type** | **str** | A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase | [optional] 
**microsoft_internal** | **bool** | it indicates if the app is microsoft internal | [optional] 
**permissions** | **List[str]** | The permissions associated with the app | [optional] 

## Example

```python
from openapi_client.models.tester_app_response import TesterAppResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TesterAppResponse from a JSON string
tester_app_response_instance = TesterAppResponse.from_json(json)
# print the JSON string representation of the object
print(TesterAppResponse.to_json())

# convert the object into a dict
tester_app_response_dict = tester_app_response_instance.to_dict()
# create an instance of TesterAppResponse from a dict
tester_app_response_from_dict = TesterAppResponse.from_dict(tester_app_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


