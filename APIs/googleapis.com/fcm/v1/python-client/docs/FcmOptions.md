# FcmOptions

Platform independent options for features provided by the FCM SDKs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_label** | **str** | Label associated with the message&#39;s analytics data. | [optional] 

## Example

```python
from openapi_client.models.fcm_options import FcmOptions

# TODO update the JSON string below
json = "{}"
# create an instance of FcmOptions from a JSON string
fcm_options_instance = FcmOptions.from_json(json)
# print the JSON string representation of the object
print(FcmOptions.to_json())

# convert the object into a dict
fcm_options_dict = fcm_options_instance.to_dict()
# create an instance of FcmOptions from a dict
fcm_options_from_dict = FcmOptions.from_dict(fcm_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


