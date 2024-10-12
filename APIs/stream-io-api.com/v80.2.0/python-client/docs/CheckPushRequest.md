# CheckPushRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apn_template** | **str** | Push message template for APN | [optional] 
**firebase_data_template** | **str** | Push message data template for Firebase | [optional] 
**firebase_template** | **str** | Push message template for Firebase | [optional] 
**message_id** | **str** | Message ID to send push notification for | [optional] 
**push_provider_name** | **str** | Name of push provider | [optional] 
**push_provider_type** | **str** | Push provider type | [optional] 
**skip_devices** | **bool** | Don&#39;t require existing devices to render templates | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.check_push_request import CheckPushRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPushRequest from a JSON string
check_push_request_instance = CheckPushRequest.from_json(json)
# print the JSON string representation of the object
print(CheckPushRequest.to_json())

# convert the object into a dict
check_push_request_dict = check_push_request_instance.to_dict()
# create an instance of CheckPushRequest from a dict
check_push_request_from_dict = CheckPushRequest.from_dict(check_push_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


