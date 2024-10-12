# ErrorsLatestErrorDetails200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_launch_timestamp** | **datetime** | Timestamp when the app was launched, example: &#39;2017-03-13T18:05:42Z&#39;.  | [optional] 
**carrier_name** | **str** | Carrier name (for mobile devices).  | [optional] 
**jailbreak** | **bool** | Flag indicating if device is jailbroken  | [optional] 
**name** | **str** |  | [optional] 
**properties** | **Dict[str, str]** |  | [optional] 
**reason_frames** | [**List[ErrorsGroupList200ResponseErrorGroupsInnerAllOfReasonFramesInner]**](ErrorsGroupList200ResponseErrorGroupsInnerAllOfReasonFramesInner.md) |  | [optional] 
**country** | **str** |  | [optional] 
**device_name** | **str** |  | [optional] 
**error_id** | **str** |  | [optional] 
**has_attachments** | **bool** |  | [optional] 
**has_breadcrumbs** | **bool** |  | [optional] 
**language** | **str** |  | [optional] 
**os_type** | **str** |  | [optional] 
**os_version** | **str** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.errors_latest_error_details200_response import ErrorsLatestErrorDetails200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsLatestErrorDetails200Response from a JSON string
errors_latest_error_details200_response_instance = ErrorsLatestErrorDetails200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsLatestErrorDetails200Response.to_json())

# convert the object into a dict
errors_latest_error_details200_response_dict = errors_latest_error_details200_response_instance.to_dict()
# create an instance of ErrorsLatestErrorDetails200Response from a dict
errors_latest_error_details200_response_from_dict = ErrorsLatestErrorDetails200Response.from_dict(errors_latest_error_details200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


