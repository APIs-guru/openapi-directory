# AppResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | App ApiKey | [optional] 
**created_date** | **str** | The date the app was created | [optional] 
**description** | **str** | App description | [optional] 
**id** | **str** |  | [optional] 
**modified_date** | **str** | The date the app was modified | [optional] 
**name** | **str** | App name | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_response import AppResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppResponse from a JSON string
app_response_instance = AppResponse.from_json(json)
# print the JSON string representation of the object
print(AppResponse.to_json())

# convert the object into a dict
app_response_dict = app_response_instance.to_dict()
# create an instance of AppResponse from a dict
app_response_from_dict = AppResponse.from_dict(app_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


