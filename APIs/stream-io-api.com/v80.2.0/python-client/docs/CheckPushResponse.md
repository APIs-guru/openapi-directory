# CheckPushResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_errors** | [**Dict[str, DeviceErrorInfo]**](DeviceErrorInfo.md) | Object with device errors | [optional] 
**duration** | **str** |  | 
**general_errors** | **List[str]** | List of general errors | [optional] 
**rendered_apn_template** | **str** |  | [optional] 
**rendered_firebase_template** | **str** |  | [optional] 
**rendered_message** | **Dict[str, str]** |  | [optional] 
**skip_devices** | **bool** | Don&#39;t require existing devices to render templates | [optional] 

## Example

```python
from openapi_client.models.check_push_response import CheckPushResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPushResponse from a JSON string
check_push_response_instance = CheckPushResponse.from_json(json)
# print the JSON string representation of the object
print(CheckPushResponse.to_json())

# convert the object into a dict
check_push_response_dict = check_push_response_instance.to_dict()
# create an instance of CheckPushResponse from a dict
check_push_response_from_dict = CheckPushResponse.from_dict(check_push_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


