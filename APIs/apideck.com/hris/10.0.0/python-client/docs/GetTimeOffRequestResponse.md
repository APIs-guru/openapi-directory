# GetTimeOffRequestResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TimeOffRequest**](TimeOffRequest.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_time_off_request_response import GetTimeOffRequestResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTimeOffRequestResponse from a JSON string
get_time_off_request_response_instance = GetTimeOffRequestResponse.from_json(json)
# print the JSON string representation of the object
print(GetTimeOffRequestResponse.to_json())

# convert the object into a dict
get_time_off_request_response_dict = get_time_off_request_response_instance.to_dict()
# create an instance of GetTimeOffRequestResponse from a dict
get_time_off_request_response_from_dict = GetTimeOffRequestResponse.from_dict(get_time_off_request_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


