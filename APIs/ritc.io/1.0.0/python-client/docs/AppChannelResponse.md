# AppChannelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **int** | Channel Id | [optional] 
**created_date** | **str** | The date the user was created | [optional] 
**id** | **int** |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**user_id** | **int** | Id of App User assigned to Channel | [optional] 

## Example

```python
from openapi_client.models.app_channel_response import AppChannelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppChannelResponse from a JSON string
app_channel_response_instance = AppChannelResponse.from_json(json)
# print the JSON string representation of the object
print(AppChannelResponse.to_json())

# convert the object into a dict
app_channel_response_dict = app_channel_response_instance.to_dict()
# create an instance of AppChannelResponse from a dict
app_channel_response_from_dict = AppChannelResponse.from_dict(app_channel_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


